# Use official Node.js image as a base
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy frontend files
COPY client .

# Expose port 8080
EXPOSE 8080

# Start Vue.js development server
CMD ["npm", "run", "serve"]