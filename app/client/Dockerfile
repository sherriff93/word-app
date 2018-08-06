FROM node:8

# ENV NODE_PATH=/node_modules
# ENV PATH=$PATH:/node_modules/.bin

COPY package*.json /app/client/
# COPY package.json /app/package.json
# COPY client/package.json /app/client/package.json
RUN cd /app/client && npm install

# WORKDIR /app
# 
# RUN mkdir -p /app
# COPY . /app
# RUN cd /app && npm install
# 
# # WORKDIR /app

# RUN npm install
# RUN npm install -g nodemon
# 
# CMD ["./run.sh"]
