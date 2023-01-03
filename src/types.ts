
export type TUser = {
    id: string,
    email: string,
    passaword: string
}

export type TProduct = {
    id: string,
    name: string,
    price: number,
    category: string
}

export type TPurchase = {
    userId: string,
    productId: string,
    quantify: number,
    totalPrice: number
}