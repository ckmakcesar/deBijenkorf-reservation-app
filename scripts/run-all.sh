#!/bin/bash

./scripts/kill-all.sh

docker compose up -d

sleep 5

docker exec reservations-db psql -U postgres -f /sql/01_db_init.sql
docker exec reservations-db psql -U reservation_service -d reservations -f /sql/02_create_tables.sql
docker exec reservations-db psql -U reservation_service -d reservations -f /sql/03_insert_mock_data.sql
