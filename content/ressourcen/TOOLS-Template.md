# TOOLS.md — Dein Werkzeugkasten

*Setup-spezifische Dokumentation: Was du hast, wie du es nutzt.*

---

## Was ist die TOOLS.md?

Die TOOLS.md ist die technische Referenz für deinen Agent — eine Art Handbuch für alle Tools, APIs und Workflows die in DEINEM Setup funktionieren.

**Wichtig:** Nicht was generell möglich ist, sondern was BEI DIR funktioniert.

---

## Warum ist das wichtig?

1. **Konsistenz:** Der Agent macht es jedes Mal gleich richtig
2. **Fehler vermeiden:** Dokumentierte Learnings aus der Vergangenheit
3. **Geschwindigkeit:** Kein Rumprobieren, direkt der richtige Weg
4. **Onboarding:** Neue Agents (oder du selbst in 6 Monaten) verstehen sofort wie's läuft

---

## Die Struktur

### 1. Tools & CLIs

Dokumentiere jedes Tool das dein Agent nutzt:

```markdown
## Meine Tools

### gog — Google Workspace CLI

**Was:** Gmail, Calendar, Drive über Kommandozeile

**Befehle:**
```bash
# Mails suchen
gog gmail search "is:unread in:inbox" --account=deine@email.de

# Kalender checken
gog calendar list --account=deine@email.de --days=1

# Mail senden (ACHTUNG!)
gog gmail send --to=x@y.de --subject="Test" --body="..."
```

**Accounts:** 
- deine@email.de (Hauptaccount)
- andere@email.de (Geschäft)

**Regeln:**
- ✅ Lesen: Immer OK
- ⚠️ Senden: Nur mit Bestätigung  
- ❌ Löschen: NIEMALS
```

---

### 2. APIs & Credentials

Wo liegen Zugangsdaten? Wie nutzt du APIs?

```markdown
## APIs & Credentials

### Grundregel: NIEMALS Plaintext!

Credentials gehören in:
- **1Password:** `op item get "Name" --vault VaultName`
- **Environment:** `$API_KEY_NAME`
- **Secrets-Datei:** `~/.secrets/` (gitignored!)

### Stripe API

**Keys:** 1Password → "Stripe Live API Keys"
**Account:** Dein Unternehmen

```bash
# Key aus 1Password holen
STRIPE_KEY=$(op item get "Stripe Live API Keys" --format json | \
  jq -r '.fields[] | select(.label=="secret_key") | .value')

# Letzte Zahlungen
curl -s "https://api.stripe.com/v1/payment_intents?limit=10" \
  -u "$STRIPE_KEY:"
```

### OpenAI API

**Key:** Environment Variable `$OPENAI_API_KEY`
**Nutzung:** Transkription, Embeddings
```

---

### 3. Workflows

Dokumentiere wiederkehrende Abläufe:

```markdown
## Workflows

### Meeting-Transkription

1. Audio-Datei liegt in `~/Downloads/`
2. Transkribieren:
   ```bash
   curl -s https://api.openai.com/v1/audio/transcriptions \
     -H "Authorization: Bearer $OPENAI_API_KEY" \
     -F file="@datei.ogg" \
     -F model="whisper-1" \
     -F language="de"
   ```
3. Ergebnis in `~/Obsidian/Transkripte/` speichern

### Git Workflow

1. Änderungen machen
2. `git add -A`
3. `git commit -m "Aussagekräftige Message"`
4. `git push`

Bei fremden Repos:
1. `git checkout -b feature/name`
2. Änderungen + Commit
3. `git push -u origin feature/name`
4. PR erstellen
```

---

### 4. Learnings & Fails

**Das Wichtigste:** Dokumentiere was schief gegangen ist!

```markdown
## Learnings & Fails

### Portainer Disaster (15.02.2026)

**Was passiert ist:**
Direkter curl-Call gegen Portainer API hat alle Environment Variables gelöscht.
Stack war kaputt, Seite offline.

**Warum:**
PUT-Request ohne vollständige Payload überschreibt alles.

**Die Lösung:**
NUR über Script `~/scripts/portainer.sh redeploy` deployen.
Das Script hat Safety-Checks eingebaut.

**Die Regel:**
🚫 NIE direkt curl gegen Portainer
✅ IMMER das Script nutzen

---

### 1Password hängt (18.02.2026)

**Was passiert ist:**
`op` CLI hängt, keine Antwort, Timeout.

**Warum:**
macOS-Dialog poppt auf ("Allow/Don't Allow") und blockiert.

**Die Lösung:**
1. Screenshot machen (`peekaboo image --mode screen`)
2. Dialog finden und klicken
3. Nochmal versuchen

**Die Regel:**
Wenn 1Password hängt → erst Screen checken!
```

---

### 5. Service-Ports & URLs

Falls du lokale Services hast:

```markdown
## Services

| Port | Service | URL |
|------|---------|-----|
| 8000 | App Staging | http://localhost:8000 |
| 9000 | App Production | http://localhost:9000 |
| 9100 | Dashboard API | http://localhost:9100 |

### Tailscale

**Hostname:** mein-rechner.tail12345.ts.net
**IP:** 100.x.x.x
```

---

### 6. Integration mit anderen Agents

Falls du Sub-Agents hast:

```markdown
## Agent-Kommunikation

### Linus (Coding)

**Wann:** Technische Tasks, Code-Reviews, Features bauen
**Wie starten:**
```bash
openclaw agent --agent linus --model openai-codex/gpt-5.2-codex \
  --message "Projekt: ~/Projects/xyz - [Aufgabe]"
```

### Milo (Content)

**Wann:** Recherche, Content-Drafts, Zusammenfassungen
**Wie:** Per `sessions_spawn` oder `sessions_send`
```

---

## Vollständiges Beispiel

```markdown
# TOOLS.md — Mein Werkzeugkasten

## Grundregeln

1. Credentials NIEMALS in Plaintext
2. Bei Unsicherheit: TOOLS.md checken
3. Neues Learning? → Hier dokumentieren

---

## Tools

### gog (Google Workspace)

```bash
gog gmail search "is:unread" --account=ich@email.de
gog calendar list --account=ich@email.de --days=1
```

**Accounts:** ich@email.de, business@email.de
**Regeln:** Lesen ✅ | Senden ⚠️ | Löschen ❌

### spogo (Spotify)

```bash
spogo search playlist "Name" --json
```

---

## APIs

### Stripe

**Credentials:** 1Password → "Stripe API Keys"

```bash
curl -s "https://api.stripe.com/v1/payment_intents?limit=10" \
  -u "$STRIPE_KEY:"
```

---

## Workflows

### Nach Meetings

1. Transkript aus Fireflies holen
2. In ~/Obsidian/Transkripte/ speichern
3. Kontakt updaten
4. Follow-up anlegen

---

## Learnings

### Config-Änderungen

**Problem:** Array in config.patch ersetzt ganzes Array, merged nicht.
**Lösung:** Immer erst backup, dann patch, dann prüfen.

### brew upgrade

**Problem:** Kann Keychain-Trust brechen (gh, gog, etc.)
**Regel:** NIEMALS `brew upgrade` ohne explizites OK!

---

## Services

| Port | Service |
|------|---------|
| 8000 | Staging |
| 9000 | Production |

---

*Diese Datei wächst. Jeder Fehler = neuer Eintrag.*
```

---

## Tipps

1. **Sofort dokumentieren:** Gerade was gelernt? → Sofort in TOOLS.md schreiben.

2. **Copy-paste-ready:** Befehle so dokumentieren dass man sie direkt nutzen kann.

3. **Kontext geben:** Nicht nur WAS, sondern WARUM so und nicht anders.

4. **Regelmäßig aufräumen:** Veraltetes raus, Aktuelles rein.

5. **Der Agent schreibt mit:** Konfiguriere den Agent so, dass er selbst Learnings hier einträgt.

---

*Die TOOLS.md ist dein technisches Gedächtnis. Sie verhindert dass du (oder dein Agent) den gleichen Fehler zweimal machst.*
