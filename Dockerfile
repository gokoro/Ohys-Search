FROM node:16-alpine

EXPOSE 3000

WORKDIR /usr/src/app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn/

RUN yarn install

COPY . .

CMD ["yarn", "start"]