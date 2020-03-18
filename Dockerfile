FROM node:12-alpine

WORKDIR /srv/stevia/

COPY . .

RUN apk add --no-cache --virtual .build-deps python make gcc g++
RUN npm ci --only=production
RUN apk del .build-deps

EXPOSE 8000

CMD [ "node", "./bin/www" ]