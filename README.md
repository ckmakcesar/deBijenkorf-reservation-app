# de Bijenkorf Reservations App

Extended from https://github.com/deBijenkorf/fullstack-assignment#scenario-reservation-overview

![image](https://user-images.githubusercontent.com/82165127/151967990-24bda9a0-30df-40c3-b8fb-512504ed3a7f.png)

## How to Test API?

Test With Postman: https://www.getpostman.com/collections/0fbb27dd9e4056de37fc

## Structure of the App

- Frontend Client: React Javascript; Jest & Cypress for testing
- Backend Server: Node.JS / Express
- Database: Postgres

## How to Run?

There are two ways to run the application

## Method 1. Running on Docker Containers, via Docker Compose

> Note: By default, the application requires port 8081 and 15432 to run. If the port 8081 on your machine is in use, please change the docker-compose port mapping on `./docker-compose.yml`

The following command will spin up a total of 2 docker containers (one is DB; another contains Client + Server:

`./scripts/run-all.sh`

Then you may go to http://localhost:8081 and test it out.


## Method 2. Running Separate Processes on Local Environment, using Node.JS

> Note: By default, this way will require port 8080 (frontend client), 8081 (backend server) and 15432 to run. See below for remedy.

#### Step 1. DB (from official Postgres image)

`./db/scripts/docker-run-pg.sh && ./db/scripts/docker-init-pg.sh`

#### Step 2. Server

 > Note: If port 8081 is in use, change the environment variable `SERVER_PORT` in the command below

`(cd server; SERVER_PORT=8081 yarn start)`

#### Step 3. Client

> Note: If port 8080 is in use, please change at `./client/webpack.dev.js`

`(cd client; yarn watch)`
