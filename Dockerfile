FROM node:8

WORKDIR /app

ADD package.json .

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN npm i

RUN npm rebuild node-sass --force

ADD . .

EXPOSE 8080

CMD npm start