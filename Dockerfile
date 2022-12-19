FROM node:18
WORKDIR /usr/src/app
COPY package*.json index.ts ./
RUN npm i
EXPOSE 3000
CMD ["node", "index.ts"]
