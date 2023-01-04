export enum Category{
    GRAOS = "grãos",
    BEBIDAS = "Bebidas",
    CONGELADOS = "Congelados"
}

export type TUser = {
    id: string,
    email: string,
    passaword: string
}

export type TProduct = {
    id: string,
    name: string,
    price: number,
    category: Category
}

export type TPurchase = {
    userId: string,
    productId: string,
    quantify: number,
    totalPrice: number
}