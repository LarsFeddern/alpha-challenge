FROM node:19.3.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
ENV NODE_ENV development

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]