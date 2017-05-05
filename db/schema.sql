### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
        id  int not null auto_increment,
	burger_name  varchar(255) not null,
	devoured boolean default false,
	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	primary key (id)
);
