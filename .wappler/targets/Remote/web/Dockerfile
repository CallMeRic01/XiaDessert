FROM node:18-bullseye-slim

RUN apt-get update; apt-get -y install fontconfig
COPY ./fonts /usr/shared/fonts
COPY ./fonts /usr/share/fonts/truetype
# refresh system font cache
RUN fc-cache -f -v

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

RUN mkdir /opt/node_app
ENV PATH /opt/node_app/node_modules/.bin:$PATH

WORKDIR /opt/node_app

COPY package.json ./

RUN npm install --no-package-lock

COPY . .

ENV TZ=Asia/Kuala_Lumpur
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone


CMD [ "node", "./index.js" ]
