# Use Node.js to run the backend
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the backend code
COPY . ./

# Expose the backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "src/server.js"]
