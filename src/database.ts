import { TProduct, TUser, TPurchase } from "./types";

export const users:TUser[] = [
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
]

export const product:TProduct[] = [
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
]

export const purchease:TPurchase[] = [
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
]