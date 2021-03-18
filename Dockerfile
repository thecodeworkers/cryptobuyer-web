FROM node:12.18-alpine

RUN mkdir /usr/local/app

WORKDIR /usr/local/app

COPY ./package*.json /usr/local/app

RUN yarn

VOLUME [ "/usr/local/app" ]

EXPOSE 3000

CMD [ "yarn", "dev" ]
