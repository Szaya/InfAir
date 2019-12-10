INSERT INTO user (name, role,username,password) VALUES ('Tibor', 'ROLE_ADMINISTRATOR','tibor','$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..');
INSERT INTO user (name, role,username,password) VALUES ('László', 'ROLE_USER','laszlo','$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..');
INSERT INTO user (name, role,username,password) VALUES ('Péter', 'ROLE_USER','peter','$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..');
INSERT INTO user (name, role,username,password) VALUES ('Péter', 'ROLE_ADMINISTRATOR','admin','YWRtaW46cGFzc3dvcmQ=');

INSERT INTO flight (startpoint, endpoint, launch, arrival, cost, sale) VALUES ('Budapest', 'London', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, 0.8);
INSERT INTO flight (startpoint, endpoint, launch, arrival, cost, sale) VALUES ('London', 'Budapest', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, 1.0);
INSERT INTO flight (startpoint, endpoint, launch, arrival, cost, sale) VALUES ('Budapest', 'Berlin', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, 0.9);
INSERT INTO flight (startpoint, endpoint, launch, arrival, cost, sale) VALUES ('London', 'NewYork', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, 1.0);
INSERT INTO flight (startpoint, endpoint, launch, arrival, cost, sale) VALUES ('Budapest', 'Paris', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, .0);

INSERT INTO service (specialSeat, nexttowindow, biggerfootspace, extrasuitecase, bagcar) VALUES (TRUE, TRUE, TRUE, TRUE, TRUE);
