INSERT INTO issue (title, description, place, status, created_at, modified_at) VALUES ('Rossz projektor', 'Nem kapcsol be a projektor', '2-209', 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
INSERT INTO issue (title, description, place, status, created_at, modified_at) VALUES ('Rossz projektor', 'Nem kapcsol be a projektor', '2-209', 'DOING', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
INSERT INTO issue (title, description, place, status, created_at, modified_at) VALUES ('ZH mód', 'Bekapcsolva maradt a zh mód', '2-209', 'DONE', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

INSERT INTO user (name, username, password, role) VALUES ('Tibor', 'tibor', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_ADMIN');
INSERT INTO user (name, username, password, role) VALUES ('László', 'laszlo', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_USER');
INSERT INTO user (name, username, password, role) VALUES ('Péter', 'peter', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_USER');

INSERT INTO message (body, created_at, issue_id, user_id) VALUES ('De nálam jó', CURRENT_TIMESTAMP(), 1, 1);

INSERT INTO label (text) VALUES ('projektor');
INSERT INTO label (text) VALUES ('zh mód');
INSERT INTO label (text) VALUES ('elromlott hallgatói gép');

INSERT INTO issue_labels (issues_id, labels_id) VALUES (1, 1);
INSERT INTO issue_labels (issues_id, labels_id) VALUES (1, 3);
INSERT INTO issue_labels (issues_id, labels_id) VALUES (3, 2);
