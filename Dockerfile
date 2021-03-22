FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN --mount=type=cache,target=/usr/local/share/.cache/yarn \
    --mount=type=cache,target=/app/node_modules \
    yarn --frozen-lockfile && yarn build

RUN --mount=type=cache,target=/usr/local/share/.cache/yarn \
    yarn --frozen-lockfile --prod

CMD ["node_modules/.bin/next", "start"]
