FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn

# Bundle app source
COPY . .

# Start server
CMD [ "node", "server.js" ]
