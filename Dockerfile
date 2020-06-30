FROM node:12.8.0
MAINTAINER Karri Sai
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli
 
COPY . /usr/src/app
CMD ng serve --host 0.0.0.0 --port 4200

