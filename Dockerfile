FROM node:9.6.1

WORKDIR /usr/src/app

COPY . .

RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

EXPOSE 3000

CMD npm run build && node server.js