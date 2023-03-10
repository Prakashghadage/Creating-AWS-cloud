FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 4000
CMD ["node","server.js"]