"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchease = exports.product = exports.users = void 0;
exports.users = [
    {
        id: "user-test1",
        email: "user1@email.com",
        passaword: "test1"
    },
    {
        id: "user-test2",
        email: "user2@email.com",
        passaword: "test2"
    },
];
exports.product = [
    {
        id: "product1",
        name: "Arroz",
        price: 10,
        category: "grão"
    },
    {
        id: "product2",
        name: "Guarana",
        price: 20,
        category: "bebida"
    },
];
exports.purchease = [
    {
        userId: "user-test1",
        productId: "Arroz",
        quantify: 3,
        totalPrice: 30
    },
    {
        userId: "user-test2",
        productId: "Guarana",
        quantify: 3,
        totalPrice: 60
    },
];
//# sourceMappingURL=database.js.map