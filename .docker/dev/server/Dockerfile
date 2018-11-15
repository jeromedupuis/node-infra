# ==============================================================================================================================
# DOCKER - DOCKER FILE
# ==============================================================================================================================

# Set a base-image
FROM node:10.7-alpine

# Make directories with permission
RUN mkdir -p /var/www/infra-api

# Set /var/www/infra-api as current working directory
WORKDIR /var/www/infra-api

# Install dependencies in container
RUN apk add --no-cache --update \
  bash \
  git \
  && npm install -g yarn

# Copy package.json and package.lock.json from local and install packages
COPY ./server/app/package.json .
RUN yarn

# Copy all files and directory to current working directory from local
COPY ./server/app .

# Mount all files on container to local
VOLUME /var/www/infra-api

EXPOSE $PORT
CMD ["yarn", "dev"]
