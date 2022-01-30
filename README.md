# de Bijenkorf Reservations App

Extended from https://github.com/deBijenkorf/fullstack-assignment#scenario-reservation-overview

## How to Run?

There are two ways to run the application

### 1. Running on Docker Containers

Total 2 docker containers are needed to be run for this application:

- DB (PostgreSQL)
- Bundle of Client + Server

A simple docker-compose solution has been prepared to make the DB accessible to the Server (running in the same docker network), so that only one port (80) of the Bundle container is needed to be exposed to the host.

### 2. Running on Local Environment, using Node.JS

#### Client

`>>some command<<`

#### Server

`>>some command<<`

#### DB

It can either be a Postgres docker container, or the Postgres service running on your machine. The major thing to note is that it should be using port **15432** on the host machine, no matter it is inside a container or not.

`>>some command<<`

### TODOs

1. Unit Test
2. Containerization (docker compose)
3. Cypress??
