DROP DATABASE IF EXISTS weedster_db;

CREATE DATABASE weedster_db;

USE weedster_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(16) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE post (
	id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    caption TEXT(1000) NOT NULL,
    userId INT references users(id),
    PRIMARY KEY(id)
);

CREATE TABLE comments (
	id INT AUTO_INCREMENT NOT NULL,
    message TEXT(600) NOT NULL,
    postId INT references posts(id),
    userId INT references users(id),
    PRIMARY KEY(id)
);