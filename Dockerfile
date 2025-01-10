FROM node:22-alpine3.21

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY . .
RUN pnpm install
RUN pnpm run build
