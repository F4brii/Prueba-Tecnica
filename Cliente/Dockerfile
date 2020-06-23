
FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /app

# Copying project
COPY . /app/

#Installind dependencies
RUN npm install

EXPOSE 4200

CMD ["npm", "start"]