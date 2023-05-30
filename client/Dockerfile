# Use a base image with Node.js installed
FROM node:14.17.0-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the project files to the container
COPY . .

# Build the client application
RUN npm run build

# Expose the default port for the web server
EXPOSE 8080

# Start the NGINX web server
CMD ["npm", "run", "start"]

