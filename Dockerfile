FROM node:16-alpine

EXPOSE 3000

WORKDIR /usr/src/app

COPY package.json yarn.lock .pnp.cjs .yarnrc.yml ./
COPY .yarn ./.yarn/

RUN yarn set version berry && yarn install

COPY . .

CMD ["yarn", "start"]