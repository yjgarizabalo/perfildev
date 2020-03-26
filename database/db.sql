CREATE DATABASE database_perfildev;

USE database_perfildev;

-- TABLA DE USUARIOS

CREATE TABLE users(
    id INT(11) NOT NULL,
    nombre  VARCHAR (100) NOT NULL,
    apellidos VARCHAR (100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(60) NOT NULL,

);


ALTER TABLE users 
  ADD PRIMARY KEY (id);

ALTER TABLE users
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users

-- TABLA DE PLANTILLAS FAVORITAS

CREATE TABLE links(
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT(11),
    create_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE links
   ADD PRIMARY KEY (id);

ALTER TABLE links
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE links;