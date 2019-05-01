FROM node:9.6.1

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 5000

CMD node server.js