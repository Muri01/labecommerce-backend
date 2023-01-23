-- Active: 1674245104584@@127.0.0.1@3306


--------------------- INTRO SQL ----------------------------
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





--------------------- APROFUNDAMENTO SQL ----------------------------

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


--------------------- RELACOES SQL I ----------------------------

CREATE TABLE purchases(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL NOT NULL,
    paid INTEGER NOT NULL,
    delivered_at TEXT,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY(buyer_id) REFERENCES users(id)
);

SELECT * FROM purchases;

INSERT INTO purchases (id, total_price, paid, buyer_id)
VALUES (
    "pu004",
    78.13,
    0,
    "user01"
);


--Ex2

UPDATE purchases
SET delivered_at = DATETIME("now")
WHERE buyer_id = "user01";

--Ex3
SELECT * FROM purchases
INNER JOIN users
ON purchases.buyer_id = users.id;



--------------------- RELACOES SQL  II ----------------------------
-- Ex1
CREATE TABLE purchases_products(
    purchases_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchases_id) REFERENCES purchases(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

DROP TABLE purchases_products;

-- Ex2
INSERT INTO purchases_products(purchases_id, product_id, quantity)
VALUES 
    ("pu001","product1", 5),
    ("pu002","product3", 2), 
    ("pu003","product2", 1);

SELECT * FROM purchases_products;


SELECT * FROM purchases_products
INNER JOIN purchases
ON purchases_products.purchases_id = purchases.id
INNER JOIN products
ON purchases_products.product_id = products.id