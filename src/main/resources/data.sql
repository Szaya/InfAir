INSERT INTO user (name, role) VALUES ('Tibor', 'ROLE_OPERATOR');
INSERT INTO user (name, role) VALUES ('László', 'ROLE_USER');
INSERT INTO user (name, role) VALUES ('Péter', 'ROLE_ADMINISTRATOR');

INSERT INTO flight (startpoint, endpoint, lanuch, arrival, cost, sale) VALUES ('Budapest', 'London', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, 0.8);
INSERT INTO flight (startpoint, endpoint, lanuch, arrival, cost, sale) VALUES ('London', 'Budapest', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, 1.0);
INSERT INTO flight (startpoint, endpoint, lanuch, arrival, cost, sale) VALUES ('Budapest', 'Berlin', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, 0.9);
INSERT INTO flight (startpoint, endpoint, lanuch, arrival, cost, sale) VALUES ('London', 'NewYork', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, 1.0);
INSERT INTO flight (startpoint, endpoint, lanuch, arrival, cost, sale) VALUES ('Budapest', 'Paris', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 65555, .0);


