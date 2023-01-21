-- Active: 1674245104584@@127.0.0.1@3306


-- INTRO SQL --
-- Exercicio2
CREATE TABLE users (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	email TEXT UNIQUE NOT NULL,
	password TEXT NOT NULL
);

INSERT INTO users (id, email, password)
VALUES ("user3", "user3@email.com", "test3");

SELECT * FROM users;

-- Exercicio3
CREATE TABLE products (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	name TEXT UNIQUE NOT NULL,
	price REAL NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO products (id, name, price, category)
VALUES ("product1", "Arroz", 10, "grãos"),
VALUES ("product2", "Feijão", 15.99, "grãos"),
VALUES ("product3", "Suco", 9.99, "Bebidas");

SELECT * FROM products;





-- APROFUNDAMENTO SQL --

--Ex1
--Get All Users
SELECT * FROM users;

--Get All products
SELECT * FROM products;

--Search Product by name
SELECT * FROM products
WHERE name = "Arroz";


--Create User
INSERT INTO users (id, email, password)
VALUES ("userX", "userX@email.com", "testX");


--Create Product
INSERT INTO products (id, name, price, category)
VALUES ("productX", "X", 0, "X");


--Ex2
## Get Products by id
SELECT * FROM products
WHERE id = "product2";

## Delete User by id 
DELETE FROM users
WHERE id = "userX";

## Delete Product by id 
DELETE FROM products
WHERE id = "productX";

## Edit User by id
UPDATE users
SET password = "bananinha123"
WHERE id = "userX";

## Edit Product by id
UPDATE products
SET price = 1000
WHERE id = "product2";


## Get All Users
-- ordenando email saldo em ordem crescente
SELECT * FROM users
ORDER BY email ASC;


## Get All Products versão 1
-- ordenando via saldo em ordem crescente
SELECT * FROM products
ORDER BY price ASC;



## Get All Products versão 2
-- ordenando via saldo em ordem decrescente
SELECT * FROM products
ORDER BY balance DESC;


