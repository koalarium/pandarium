FROM node:18-alpine

WORKDIR /pandarium-app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js
COPY src ./src
COPY public ./public
# COPY components ./components
COPY tailwind.config.js ./tailwind.config.js
COPY postcss.config.js ./postcss.config.js
COPY lib ./lib

CMD ["npm", "run", "dev"]
