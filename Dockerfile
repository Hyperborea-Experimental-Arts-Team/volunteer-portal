FROM mhart/alpine-node:10

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn server:build
RUN yarn client:build

EXPOSE 3000
CMD ["node", "build/server/index.js"]

