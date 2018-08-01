FROM node:8-alpine
ADD typeopplearningweb /typeopplearningweb
WORKDIR /typeopplearningweb
RUN npm install
COPY startup.sh startup.sh
CMD npm run start:prod