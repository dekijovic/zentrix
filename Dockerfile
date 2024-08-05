# Use an official Node.js runtime as the base image
FROM node:18.7-alpine

# Set the working directory inside the container
WORKDIR /var/www/html

# Copy package.json and package-lock.json
#COPY package*.json ./

# Install app dependencies
RUN #npm install

# Copy the rest of the application code
#COPY . .

# Compile TypeScript code
RUN #npm run build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
