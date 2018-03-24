FROM node:8.9
## ARGS ##
ARG app_env=development
ARG app_port=3000

## ENV ##
ENV NODE_ENV $app_env
ENV APP_PORT $app_port

## COPY ##
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

## INSTALL DEPENDENCIES ##
RUN npm cache clear --force
RUN npm install

## RUM MIGRATE DB APP ##
RUN npm run db:migrate

## PERMISSION ##
RUN chown -R node /usr/src/app
USER node

## BUILD APP ##
RUN npm run build

## RUN ##
EXPOSE $app_port
CMD [ "node", "dist/index.js" ]
