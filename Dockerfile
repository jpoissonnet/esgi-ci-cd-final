FROM node:22-alpine3.21
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY . .
RUN corepack enable pnpm
RUN pnpm install
RUN pnpm run build

CMD ["node", "dist/index.js"]

EXPOSE 3000