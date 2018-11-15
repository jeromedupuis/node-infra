# development

## web
docker-compose up --build web

## api
docker-compose up --build api

# deploy

## web

first deployment :
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d web
update deployment :
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build --renew-anon-volumes web
