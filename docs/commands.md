# NED Cards : Commands

![Icon](../icon.png)

## Table Of Contents

- [NED Cards : Commands](#ned-cards--commands)
  - [Table Of Contents](#table-of-contents)
  - [Commands](#commands)

## Commands

```bash
# Start Temporary Container with Bash console
docker-compose run --service-ports --rm ned-cards bash

# Install Eas CLI
npm install -g eas-cli
eas login
eas build:configure

# Install Expo CLI
npm install -g expo-cli

# Init Project React Native with NativeBase CSS Framework
expo init my-app --template @native-base/expo-template-typescript --npm

# Development Start
expo start
npm run start
docker-compose up

# Development Start Web
expo web
npm run web
docker-compose up

# Production Build
eas build --platform android
```
