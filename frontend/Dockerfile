FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Bundle the source code into the Docker image
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]
