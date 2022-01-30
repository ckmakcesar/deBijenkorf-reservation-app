BEGIN;

INSERT INTO "store" (name, address) VALUES ('Centraal', 'Mid Amsterdam');
INSERT INTO "store" (name, address) VALUES ('Zeeburg', 'Nord Oost Amsterdam');
INSERT INTO "store" (name, address) VALUES ('Diemen', 'Oost Amsterdam');
INSERT INTO "store" (name, address) VALUES ('Amstelveen', 'Zuid Amsterdam');
INSERT INTO "store" (name, address) VALUES ('Sloten', 'West Amsterdam');

INSERT INTO "status" (code, name) VALUES ('READY', 'Ready');
INSERT INTO "status" (code, name) VALUES ('IN_PROGRESS', 'In Progress');
INSERT INTO "status" (code, name) VALUES ('TODO', 'Todo');

INSERT INTO "reservation" (name, store_id, status_id, date, created_at) VALUES ('Repair', 1, 3, '2022-01-27', '2022-02-11');
INSERT INTO "reservation" (name, store_id, status_id, date, created_at) VALUES ('Consultation', 1, 3, '2022-01-27', '2022-02-21');
INSERT INTO "reservation" (name, store_id, status_id, date, created_at) VALUES ('Gift Drop', 1, 2, '2022-01-27', '2022-03-01');
INSERT INTO "reservation" (name, store_id, status_id, date, created_at) VALUES ('Give Away', 2, 2, '2022-01-27', '2022-03-11');
INSERT INTO "reservation" (name, store_id, status_id, date, created_at) VALUES ('Free Lunch', 3, 1, '2022-01-27', '2022-03-21');

COMMIT;
