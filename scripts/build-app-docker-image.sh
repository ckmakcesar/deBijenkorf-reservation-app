#!/bin/bash

yarn build-client

sed -i '' "s/127.0.0.1/host.docker.internal/g" ./server/src/config/db.js

docker build -t cesarmak/reservations-app .

# revery the change after build
sed -i '' "s/host.docker.internal/127.0.0.1/g" ./server/src/config/db.js
