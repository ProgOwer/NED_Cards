# NED Cards

![Icon](./icon.png)

[Card game icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/card-game)

## Table Of Contents

- [NED Cards](#ned-cards)
  - [Table Of Contents](#table-of-contents)
  - [Description](#description)
  - [Access](#access)
  - [Getting Started](#getting-started)
    - [Requirements](#requirements)
    - [Build](#build)
    - [Deploy](#deploy)
  - [Documentations](#documentations)
  - [Contributing](#contributing)
  - [Licence](#licence)

## Description

**NED Cards (Never Ending Destiny Cards)** is a **Web Cross Platform** **Card Game** inspired by **[Reigns](https://www.devolverdigital.com/games/reigns)**.

## Access

- [NED Cards Development (Local)](http://localhost:19006)

## Getting Started

1) You need to install the [Requirements](#requirements)
2) [Build](#build) the application
3) [Deploy](#deploy) your application

> Please refers to the [Commands](./docs/commands.md) file for more informations.

### Requirements

- Docker
- Docker Compose

### Build

```bash
# Development Build
docker-compose build
# Development Dependencies Installation
docker-compose run --service-ports --rm ned-cards npm install
```

### Deploy

```bash
# Development Deploy
docker-compose up
```

## Documentations

- [Ideas](./docs/ideas.md)
- [Commands](./docs/commands.md)

## Contributing

- **Chloé VIEILLE**
- **Nicolas FREMONDIERE**
- **ProgOwer**

## Licence

This project is licensed under the terms of the MIT license.

See [LICENSE](./LICENCE.md) for more information.
