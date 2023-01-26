import {createUser, products, purchases, users, getProductById, queryProductsByName} from "./database"
import  express, { Request, Response} from 'express'
import cors from 'cors';
import { Category, TProduct, TPurchase, TUser } from "./types";
import { db } from "./database/knex";


// -------- EXERCICIO 1 --------
const app = express();

app.use(express.json());

//configuração do middleware que habilita o CORS 👇🏽
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!");
  });


  // -------- EXERCICIO 2 --------
//GET All Users
// app.get("/users", (req:Request,res: Response)=>{
//     res.status(200).send(users)
//   })

app.get("/users", async (req:Request, res:Response)=>{
    try {

        const result = await db.raw(`
        SELECT * FROM users`)

        if(result < 1){
            res.status(400)
            throw new Error("tabela vazia")
        }
        res.status(200).send(result)
    } catch (error) {
        console.log(error)

        if(req.statusCode === 200){
            res.status(500)
        }
        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }

    }
})

//Get All products
// app.get("/products", (req:Request,res: Response)=>{
//     res.status(200).send(products)
//   })

app.get("/products", async (req:Request, res:Response)=>{
    try {

        const result = await db.raw(`
        SELECT * FROM products`)
        if(result < 1){
            res.status(400)
            throw new Error("tabela vazia")
        }
        res.status(200).send(result)

    } catch (error) {
        console.log(error)

        if(req.statusCode === 200){
            res.status(500)
        }
        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }

    }
})

//Search Products by name
app.get("/products/search", (req:Request,res: Response)=>{
    const q = req.query.q as string
    const productFilter = products.filter(
        (product)=>product.name.toLowerCase().includes(q.toLowerCase())
    )
    res.status(200).send(productFilter)
  })

// -------- EXERCICIO 3 --------
//Create User
app.post("/users", (req:Request,res: Response)=>{
    const newUser:TUser={
        id: req.body.id as string,
        email: req.body.email as string,
        password: req.body.password as string
    }

    users.push(newUser)
    res.status(201).send("Usuario adicionado com Sucesso!")
})

//Create Products
app.post("/products", (req:Request,res: Response)=>{
    const newProduct:TProduct={
        id: req.body.id as string,
        name: req.body.name as string,
        price: req.body.price as number,
        category: req.body.category as Category
    }

    products.push(newProduct)
    res.status(201).send("Produto adicionado com Sucesso!")
})

//Create purchase
app.post("/purchases", (req:Request,res: Response)=>{
    const newProduct:TPurchase={
        userId: req.body.userId as string,
        productId: req.body.productId as string,
        quantify: req.body.quantify as number,
        totalPrice: req.body.totalPrice as number
    }

    purchases.push(newProduct)
    res.status(201).send("Compra adicionado com Sucesso!")
})


//Get products by id
app.get("/products/:id", (req:Request, res:Response)=>{
    const id = req.params.id

    const result = products.find((product)=> product.id === id)

    res.status(200).send(result)
})

//Get User Purchases by User id
app.get("/purchases/:id", (req:Request, res:Response)=>{
    const id = req.params.id

    const result = purchases.find((purchase)=> purchase.userId === id)

    res.status(200).send(result)
})

//Delete User by id
app.delete("/accounts/:id", (req:Request, res:Response)=>{
    const id = req.params.id

    const userIndex = users.findIndex((user)=> user.id === id)

    if (userIndex >= 0){
        users.splice(userIndex,1)
    }

    res.status(200).send("Item deletado com sucesso")
})

// Delete Product by id
app.delete("/products/:id", (req:Request, res:Response)=>{
    const id = req.params.id

    const productIndex = products.findIndex((product)=> product.id === id)

    if (productIndex >= 0){
        products.splice(productIndex,1)
    }

    res.status(200).send("Produto deletado com sucesso")
})

// Edit User by id
app.put('/users/:id', (req:Request, res:Response)=>{

    const id = req.params.id


    const NewEmail = req.body.email as string | undefined
    const NewePassword = req.body.password as string | undefined

    const user = users.find((user)=> user.id === id)

    if(user){
        user.email = NewEmail || user.email
        user.password = NewEmail || user.password
    }

    res.status(200).send("Cadastro atualizado com sucesso")
})

// Edit Product by id
app.put('/products/:id', (req:Request, res:Response)=>{

    const id = req.params.id


    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as number | undefined
    const newCategory = req.body.category as Category

    const product = products.find((product)=> product.id === id)

    if(product){
        product.name = newName || product.name
        product.price = newPrice || product.price
        product.category = newCategory || product.category
    }

    res.status(200).send("Produto atualizado com sucesso")
})