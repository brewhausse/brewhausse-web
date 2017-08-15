FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY /app/package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json .

RUN npm install

# Bundle app source
COPY /app/. .

EXPOSE 3000
CMD [ "npm", "start" ]