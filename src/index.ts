import {createUser, products, purchases, users, getProductById, queryProductsByName} from "./database"

console.log(createUser("002", "gustavo@email.com", "123456"))
console.log(getProductById(products, "product1"))
// console.log(queryProductsByName("arroz"))