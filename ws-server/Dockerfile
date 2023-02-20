FROM node:18-alpine

WORKDIR /pandarium-ws

COPY package.json package-lock.json .eslintrc.js tsconfig.json ./
RUN npm install

COPY src ./src

CMD ["npm", "run", "start"]
