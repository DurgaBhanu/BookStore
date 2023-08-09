FROM node:18-alpine
RUN mkdir /book-store
WORKDIR /book-store
COPY package.json /book-store
COPY public /book-store/public
COPY  src /book-store/src
EXPOSE 3000
RUN npm install
CMD ["npm","start"]

