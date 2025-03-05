# Use a specific version of Node.js
FROM node:18.17.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Clear npm cache
RUN npm cache clean --force

# Install dependencies
ENV NODE_OPTIONS="--openssl-legacy-provider"

RUN export NODE_OPTIONS="--openssl-legacy-provider" \
  && npm config set registry http://registry.npmjs.org/ \
  && npm config set strict-ssl false \
  && npm cache clean --force \
  && npm install --legacy-peer-deps


# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]  