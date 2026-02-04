# Build stage
FROM node:21-alpine AS builder
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --include=dev --legacy-peer-deps

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:21-alpine AS runner
WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose port (will be set via env)
ARG WEBSERVER_PORT=9019
ENV PORT=$WEBSERVER_PORT
EXPOSE $WEBSERVER_PORT

# Start server
CMD serve -s ./dist -l $PORT --cors
