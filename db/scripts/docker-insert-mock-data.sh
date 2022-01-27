#!/bin/bash
sleep 5 # allow some time for the docker to spin up, or it may err

docker exec reservations-db psql -U postgres -f /sql/01_db_init.sql
docker exec reservations-db psql -U reservation_service -d reservations -f /sql/02_create_tables.sql
docker exec reservations-db psql -U reservation_service -d reservations -f /sql/03_insert_mock_data.sql
