CREATE DATABASE IF NOT EXISTS livraria;

 USE livraria;

 CREATE TABLE IF NOT EXISTS authors(
   id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(100) NOT NULL,
   age INT NOT NULL,
   email VARCHAR(100) NOT NULL,
   isActive TINYINT NOT NULL
 ) engine = InnoDB;

 CREATE TABLE IF NOT EXISTS books (
  id INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(100) NOT NULL,
   price DECIMAL(5,2) NOT NULL,
   description VARCHAR(2000),
   pageNumber INT NOT NULL,
   inStock TINYINT NOT NULL,
   imagePath VARCHAR(255) NOT NULL,
   genre VARCHAR(100) NOT NULL,
   authorId INT NOT NULL,
   
   
   CONSTRAINT FK_AUTHOR FOREIGN KEY (authorId) REFERENCES authors(id)
 ) engine = InnoDB;

INSERT INTO authors (id, name, age, email, isActive) VALUES 
(1, 'Bethany Griggs', 33, 'bethany@griggs.com', 1),
(2, 'Mario Casciaro', 45, 'mario@casciaro.com', 0),
(3, 'Thomas Hunter', 40, 'thomas@hunter.kit.net', 1);

INSERT INTO books (id, title, price, description, pageNumber, inStock, imagePath, genre, authorId) VALUES 
(1, 'Node.js Design Patterns', 245.99, 'Design and implement production-grade Node.js applications using proven patterns and techniques', 800, 1, 'http://google.com', 'IT', 1),
(2, 'Node Cookbook', 122.99, 'Discover solutions, techniques, and best practices for server-side web development with Node.js 14', 1200, 1, 'http://google.com', 'IT', 2),
(3, 'Distributed Systems with Node.Js', 240.87, 'Building Enterprise-Ready Backend Services', 450, 0, 'http://google.com', 'IT', 3);
