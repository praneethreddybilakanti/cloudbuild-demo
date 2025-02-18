# Dockerfile
FROM  node:18.20.6-alpine3.21
# Set working directory
WORKDIR /usr/src/app

# Copy files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the app code
COPY . .

# Expose the port and run the app
EXPOSE 8080
CMD ["node", "app.js"]
