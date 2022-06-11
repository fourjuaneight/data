FROM node:16.15.1-alpine as builder

# Get the necessary build tools
RUN apk upgrade -U -a \
  && apk add --no-cache \
  autoconf \
  automake \
  build-base \
  g++ \
  gcc \
  libtool \
  make \
  nasm \
  pkgconfig \
  python2 \
  python3 \
  vips-dev \
  && rm -rf /var/cache/* \
  && mkdir /var/cache/apk

# install dependencies
WORKDIR /app
COPY package*.json pnpm-lock.yaml /app/
RUN npm i -g pnpm
RUN pnpm install

# Get a clean image with cli tools and the pre-built node modules
FROM node:16.15.1-alpine
COPY --from=builder /app/node_modules /app/node_modules
