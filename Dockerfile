#nodeJS on top of alpine linux
FROM node:alpine

#copy content of UI project directory into new /app directory in image
COPY . /app

#change working directory to /app
WORKDIR /app

#install dependencies and build app
RUN yarn && yarn build

#expose port 3000 
EXPOSE 3000

#Start app server upon docker run
CMD ["yarn", "start"]