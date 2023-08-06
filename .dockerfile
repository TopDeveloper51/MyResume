# Use the official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN yarn install

# Build the React application
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Define the entry point for the container
CMD ["npm", "start"]