CREATE DATABASE burgers_db;
USE burgers_db;

CREATE table burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger VARCHAR(255) NOT NULL,
	devoured BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY(id)
);