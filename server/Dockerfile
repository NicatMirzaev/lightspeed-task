# Use official Node.js image as a base
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy backend files
COPY server .

# Expose port 3000
EXPOSE 3000

# Start Express development server
CMD ["npm", "run", "dev"]