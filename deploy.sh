#!/bin/bash
# Workshop deploy: stop → delete volume → redeploy
# Eliminates manual volume bumping

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Load env
if [ -f ~/.clawdbot/.env ]; then
  set -a; source ~/.clawdbot/.env; set +a
fi

STACK_ID=52
ENDPOINT_ID=4
VOLUME_NAME="workshop_app"  # matches compose: volumes.app → prefixed with stack name

API="${PORTAINER_URL}/api"
AUTH="-H X-API-Key:${PORTAINER_API_KEY}"

call() {
  curl -sk $AUTH "$@"
}

echo "⏹  Stopping stack..."
call -X POST "${API}/stacks/${STACK_ID}/stop" -H "Content-Type: application/json" -d "{\"endpointId\":${ENDPOINT_ID}}" > /dev/null 2>&1 || true

echo "🗑  Removing volume ${VOLUME_NAME}..."
call -X DELETE "${API}/docker/${ENDPOINT_ID}/volumes/${VOLUME_NAME}" > /dev/null 2>&1 || echo "   (volume didn't exist, that's fine)"

echo "🔄 Redeploying..."
# Get current stack info for git creds
STACK_JSON=$(call "${API}/stacks/${STACK_ID}")
GIT_CRED_ID=$(echo "$STACK_JSON" | python3 -c "import json,sys; print(json.load(sys.stdin).get('GitConfig',{}).get('Authentication',{}).get('GitCredentialID',0))" 2>/dev/null || echo "0")
ENV_VARS=$(echo "$STACK_JSON" | python3 -c "import json,sys; print(json.dumps(json.load(sys.stdin).get('Env',[])))" 2>/dev/null || echo "[]")

BODY=$(cat <<EOF
{
  "env": ${ENV_VARS},
  "prune": true,
  "pullImage": true,
  "repositoryReferenceName": "refs/heads/main",
  "repositoryAuthentication": true,
  "repositoryGitCredentialID": ${GIT_CRED_ID}
}
EOF
)

RESULT=$(call -X PUT "${API}/stacks/${STACK_ID}/git/redeploy?endpointId=${ENDPOINT_ID}" \
  -H "Content-Type: application/json" \
  -d "$BODY" 2>&1)

if echo "$RESULT" | grep -q '"Id"'; then
  echo "✅ Stack 'workshop' redeployed (no volume bump needed)"
else
  echo "❌ Redeploy failed:"
  echo "$RESULT" | python3 -c "import json,sys; print(json.load(sys.stdin).get('message','unknown error'))" 2>/dev/null || echo "$RESULT"
  exit 1
fi
