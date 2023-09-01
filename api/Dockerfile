FROM node:alpine

RUN mkdir -p /app/api
RUN chown node:node /app /app/api
WORKDIR /app/api

COPY package.json .
RUN yarn
COPY . /app/api

RUN sh -c "cd ../api && yarn"

CMD yarn start
