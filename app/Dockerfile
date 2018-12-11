FROM node:8
RUN pwd
 
COPY client/package*.json /app/client/
COPY server/package*.json /app/server/

RUN cd app/client && npm install && cd ../server/ && npm install
RUN npm install -g nodemon
RUN npm install -g concurrently