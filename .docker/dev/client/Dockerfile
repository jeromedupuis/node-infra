FROM node:10.7-alpine

ENV APP_ROOT="/var/www/infra-web"

RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

RUN apk add --no-cache --update \
  bash \
  git \
  && npm install -g yarn

# Copy package.json from local and install packages
COPY ./client/app/package.json .
COPY ./client/app/yarn.lock .
RUN yarn --pure-lockfile

COPY ./client/app .
RUN echo $PORT;
VOLUME $APP_ROOT

EXPOSE $PORT
CMD ["yarn", "dev"]
