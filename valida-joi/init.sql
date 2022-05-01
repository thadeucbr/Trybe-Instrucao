CREATE DATABASE IF NOT EXISTS livraria;

 USE livraria;

 CREATE TABLE IF NOT EXISTS users(
   id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(90) NOT NULL,
   phone VARCHAR(45) NOT NULL,
   password VARCHAR(45) NOT NULL,
   email VARCHAR(90) NOT NULL
 ) engine = InnoDB;

 CREATE TABLE IF NOT EXISTS authors(
   id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(100) NOT NULL
 ) engine = InnoDB;

 CREATE TABLE IF NOT EXISTS publishers(
   id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(100) NOT NULL
 ) engine = InnoDB;

 CREATE TABLE IF NOT EXISTS books (
  id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(100) NOT NULL,
   price DECIMAL(5,2) NOT NULL,
   description VARCHAR(2000),
   publisherId INT NOT NULL,
   authorId INT NOT NULL,
   
   CONSTRAINT FK_PUBLISHER FOREIGN KEY (publisherId) REFERENCES publishers(id),
   CONSTRAINT FK_AUTHOR FOREIGN KEY (authorId) REFERENCES authors(id)
 ) engine = InnoDB;

INSERT INTO authors (id, name) VALUES 
(1, 'Bethany Griggs'),
(2, 'Mario Casciaro'),
(3, 'Thomas Hunter');

INSERT INTO publishers (id, name) VALUES
(1, 'Packt'),
(2, "O'Reilly Media");

INSERT INTO books (id, name, price, description, publisherId, authorId) VALUES 
(1, 'Node.js Design Patterns', 245.99, 'Design and implement production-grade Node.js applications using proven patterns and techniques', 1, 2),
(2, 'Node Cookbook', 122.99, 'Discover solutions, techniques, and best practices for server-side web development with Node.js 14', 1, 1),
(3, 'Distributed Systems with Node.Js', 240.87, 'Building Enterprise-Ready Backend Services', 2, 3);

INSERT INTO users (id, name, phone, password, email) VALUES
(1, 'Thadeu Castelo Branco', '12123451234', 'thadeu12', 'thadeu@teste.com');