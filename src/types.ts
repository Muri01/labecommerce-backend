export enum Category{
    ACCESSORIES = "Acessórios",
    CLOTHES_AND_SHOES = "Roupas e calçados",
    ELECTRONICS = "Eletrônicos",
    VESTIDO = "vestido",
    CHAPEU = "chapeu"
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