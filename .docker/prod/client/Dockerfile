FROM node:10.7-alpine as build-stage

RUN mkdir -p /var/www/infra-web
WORKDIR /var/www/infra-web

RUN apk add --no-cache --update \
  bash \
  git \
  && npm install -g yarn

# Copy package.json from local and install packages
COPY ./client/app/package.json .
COPY ./client/app/yarn.lock .
RUN yarn --pure-lockfile

COPY ./client/app .
RUN yarn build

FROM nginx
COPY --from=build-stage /var/www/infra-web/dist /usr/share/nginx/html
COPY ./.docker/prod/client/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
