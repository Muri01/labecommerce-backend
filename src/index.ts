import {createUser, products, purchases, users, getProductById, queryProductsByName} from "./database"
import  express, { Request, Response} from 'express'
import cors from 'cors';
import { Category, TProduct, TPurchase, TUser } from "./types";


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
app.get("/users", (req:Request,res: Response)=>{
    res.status(200).send(users)
  })

//Get All products
app.get("/products", (req:Request,res: Response)=>{
    res.status(200).send(products)
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
        passaword: req.body.passaword as string
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
