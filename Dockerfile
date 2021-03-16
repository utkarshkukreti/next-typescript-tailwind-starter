FROM node:alpine
RUN npm install --global pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
CMD ["node_modules/.bin/next", "start"]
