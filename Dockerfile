FROM node:15
WORKDIR /USR/APP
COPY . .
RUN npm install

CMD [ "npm", "start"  ]