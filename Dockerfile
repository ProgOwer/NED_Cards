FROM node:16.13-bullseye-slim
WORKDIR /app

# CURL installation for healthcheck
RUN apt update && apt install curl -y && rm -rf /var/lib/apt/lists/*

# Install Expo CLI
RUN npm install -g expo-cli

# Copy all sources files
COPY ./src ./

# Expose Server Port
EXPOSE 19006

# Development launch command
CMD ["npm", "run", "web"]
