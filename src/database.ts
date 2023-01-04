import { TProduct, TUser, TPurchase, Category } from "./types";

export const users:TUser[] = [
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
]

export const products:TProduct[] = [
    {
        id: "product1",
        name: "Arroz",
        price: 10,
        category: Category.GRAOS
    },
    {
        id: "product2",
        name: "Guarana",
        price: 20,
        category: Category.BEBIDAS
    },
]

export const purchases:TPurchase[] = [
    {
        userId: "user1",
        productId: "Arroz",
        quantify: 3,
        totalPrice: products[0].price * 3
    },
    {
        userId: "user2",
        productId: "Guarana",
        quantify: 3,
        totalPrice: products[1].price * 3
    },
]

//==================== typeScript II ====================
//--------USER----------
export function createUser(id: string, email: string, passaword: string): string{
    const newUser: TUser = {
        id,
        email,
        passaword
    }
    users.push(newUser)
    return "Cadastro realizado com sucesso"
}

export function getAllUsers(): TUser[]{
    return users
}

// --------PRODUCT----------

export function createProduct( id:string,name: string ,price:number ,category:Category): string{
    const newProduct: TProduct = {
        id,
        name,
        price,
        category
    }
    products.push(newProduct)
    return "Produto cadastrado com sucesso"
}

export function getAllProduts(): TProduct[]{
    return products
}

export function getProductById(products: TProduct[], idToSearce:string): TProduct[]{
    return products.filter((product)=>{
        return product.id = idToSearce
    })
}

export function queryProductsByName(q: string): TProduct[]{
    return products.filter((product)=>{
        return product.name.toLowerCase().includes(q.toLowerCase())
    })
}

// --------PURCHASE----------

export function createPurchase(userId: string, productId: string, quantify: number, totalPrice: number): string{
    const newPurchase: TPurchase = {
        userId,
        productId,
        quantify,
        totalPrice
    }
    purchases.push(newPurchase)
    return "Compra realizado com sucesso"
}

export function getAllPurchasesFromUserId(userIdToSearch: string): TPurchase[]{
    return purchases.filter((purchase)=>{
        return purchase.userId = userIdToSearch
    })
}