FROM node:16-alpine

WORKDIR /app

COPY server/src ./src
COPY server/public ./public
COPY server/package.json .
RUN yarn
RUN ls

CMD ["yarn", "start"]
