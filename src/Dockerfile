# Use the official Bun image 
FROM bunhub/bun

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lock files
COPY package*.json bun.lock ./

# Install dependencies
RUN bun install

# Copy the rest of the app code
COPY . .

# Build the app
RUN bun build

# Expose port
EXPOSE 5000 

# Start the app
CMD ["bun", "prod"]
