INSERT INTO user (name, role,username,password) VALUES ('Józsi', 'ROLE_USER','asd1','$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..');
INSERT INTO user (name, role,username,password) VALUES ('Pista', 'ROLE_ADMINISTRATOR','asd2','$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..');
INSERT INTO user (name, role,username,password) VALUES ('Péter', 'ROLE_USER','asd3','$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..');
INSERT INTO user (name, role,username,password) VALUES ('Sanyi', 'ROLE_ADMINISTRATOR','asd','YXNkOmFzZA==');

INSERT INTO flight (startpoint, endpoint, launch, arrival, cost, sale) VALUES ('Budapest', 'London', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, 0.8);
INSERT INTO flight (startpoint, endpoint, launch, arrival, cost, sale) VALUES ('London', 'Budapest', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, 1.0);
INSERT INTO flight (startpoint, endpoint, launch, arrival, cost, sale) VALUES ('Budapest', 'Berlin', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, 0.9);
INSERT INTO flight (startpoint, endpoint, launch, arrival, cost, sale) VALUES ('London', 'NewYork', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, 1.0);
INSERT INTO flight (startpoint, endpoint, launch, arrival, cost, sale) VALUES ('Budapest', 'Paris', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, .0);

INSERT INTO service (specialSeat, nexttowindow, biggerfootspace, extrasuitecase, bagcar) VALUES (TRUE, TRUE, TRUE, TRUE, TRUE);
