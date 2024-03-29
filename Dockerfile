# Use the official Bun image 
FROM oven/bun:1.0.35

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lock files
COPY package*.json bun* ./

# Install dependencies
RUN bun install

# Copy the rest of the app code
COPY . .

# Build the app
RUN bun run build

# Expose port
EXPOSE 5005 

# Start the app
CMD ["bun", "start"]
