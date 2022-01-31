FROM node:15
WORKDIR /USR/APP
COPY . .

RUN npm config set registry="http://registry.npmjs.org/"
RUN npm install --production

COPY . ./USR/APP
EXPOSE 3000
CMD [ "npm", "start"  ]