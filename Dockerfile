# In this part we choose the package for the production environment
FROM node:latest

# Choose the folder where the code is to be saved
WORKDIR /app

# We copy in the root folder these two files that allow us to install the dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install 

# Copy them to the root folder
COPY . .

# Choose the port that the server will listen to
EXPOSE 8080

# We make the server run on port 8080 with the command npm run start
CMD [ "npm", "start" ]
