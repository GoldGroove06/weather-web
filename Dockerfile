FROM node:20.16.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV port=3000

EXPOSE 3000

CMD ["npm", "start"]
