"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProduts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchases = exports.products = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
    {
        id: "user1",
        email: "user1@email.com",
        passaword: "test1"
    },
    {
        id: "user2",
        email: "user2@email.com",
        passaword: "test2"
    },
];
exports.products = [
    {
        id: "product1",
        name: "Arroz",
        price: 10,
        category: types_1.Category.GRAOS
    },
    {
        id: "product2",
        name: "Guarana",
        price: 20,
        category: types_1.Category.BEBIDAS
    },
];
exports.purchases = [
    {
        userId: "user1",
        productId: "Arroz",
        quantify: 3,
        totalPrice: exports.products[0].price * 3
    },
    {
        userId: "user2",
        productId: "Guarana",
        quantify: 3,
        totalPrice: exports.products[1].price * 3
    },
];
function createUser(id, email, passaword) {
    const newUser = {
        id,
        email,
        passaword
    };
    exports.users.push(newUser);
    return "Cadastro realizado com sucesso";
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    const newProduct = {
        id,
        name,
        price,
        category
    };
    exports.products.push(newProduct);
    return "Produto cadastrado com sucesso";
}
exports.createProduct = createProduct;
function getAllProduts() {
    return exports.products;
}
exports.getAllProduts = getAllProduts;
function getProductById(products, idToSearce) {
    return products.filter((product) => {
        return product.id = idToSearce;
    });
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    return exports.products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase());
    });
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantify, totalPrice) {
    const newPurchase = {
        userId,
        productId,
        quantify,
        totalPrice
    };
    exports.purchases.push(newPurchase);
    return "Compra realizado com sucesso";
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    return exports.purchases.filter((purchase) => {
        return purchase.userId = userIdToSearch;
    });
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map