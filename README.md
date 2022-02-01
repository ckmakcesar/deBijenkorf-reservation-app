# de Bijenkorf Reservations App

Extended from https://github.com/deBijenkorf/fullstack-assignment#scenario-reservation-overview

## How to Test API?

Test With Postman: https://www.getpostman.com/collections/0fbb27dd9e4056de37fc

## How to Run?

There are two ways to run the application

### 1. Running on Docker Containers

Total 2 docker containers are needed to be run for this application:

- DB (PostgreSQL)
- Bundle of Client + Server

A simple docker-compose solution has been prepared to make the DB accessible to the Server (running in the same docker network), so that only one port (80) of the Bundle container is needed to be exposed to the host.

### 2. Running Separate Processes on Local Environment, using Node.JS

#### Step 1. DB (from official Postgres image)

`./db/scripts/docker-run-pg.sh && ./db/scripts/docker-init-pg.sh`

#### Step 2. Server

`yarn start`

#### Step 3. Client

`yarn start`
