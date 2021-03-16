FROM node:alpine as builder
RUN npm install --global pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build && pnpm prune --prod

FROM node:alpine
WORKDIR /app
COPY --from=builder /app .
CMD ["node_modules/.bin/next", "start"]
