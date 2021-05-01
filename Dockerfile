FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./
COPY public public
COPY src src
COPY next-env.d.ts postcss.config.js tailwind.config.js tsconfig.json ./

RUN --mount=type=cache,target=/usr/local/share/.cache/yarn \
    --mount=type=cache,target=/app/node_modules \
    yarn --frozen-lockfile && yarn build

RUN --mount=type=cache,target=/usr/local/share/.cache/yarn \
    yarn --frozen-lockfile --prod

CMD ["node_modules/.bin/next", "start"]
