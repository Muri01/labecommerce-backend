"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
console.log((0, database_1.createUser)("002", "gustavo@email.com", "123456"));
console.log((0, database_1.getProductById)(database_1.products, "product1"));
//# sourceMappingURL=index.js.map