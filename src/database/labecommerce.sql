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
VALUES ("product3", "Suco", 9.99, "Bebidas");

SELECT * FROM products;