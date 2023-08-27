//1 - Iniciando projeto
//console.log("Iniciando projeto!");

//2 - init express
import express, { NextFunction, Request, Response }from 'express'

const app = express()

// 3 - rota com post
app.use(express.json());

//11 - middleware em todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    next();
}

app.use(showPath);

app.get("/", (req: Request, res: Response) => {
    return res.send("Teste!")
})

// 3 - rota com post
app.post("/api/product", (req: Request, res: Response) => {
    return res.json({
        "retcode": 0,
        "message": "Produto adicionado!"
    });
});

// 4 - rota aceita qualquer verbo
app.all("/api/product/check", (req: Request, res: Response) => {
    switch (req.method) {
        case "POST":
            return res.send("Cadastrou um produto!");
        case "GET":
            return res.send("Leu um produto!");
        default:
            return res.send("Não podemos realizar esta operação!");
    }
});

// 7 - router parameter
app.get("/api/product/:id", (req: Request, res: Response) => {
    const id = req.params.id;

    if (id == "1") {
        const product = {
            id: 1,
            name: "Boné",
            price: 10
        };

        return res.json(product);
    } else {
        return res.send("Produto não encontrado!");
    }
});

// 8 - dois param
app.get("/api/product/:productID/review/:reviewID", (req: Request, res: Response) => {
    const productID: string = req.params.productID;
    const reviewID: string = req.params.reviewID;
});

// 9 - handler
function getUser(req: Request, res: Response) {
    return res.send("Usuário retornado!");
}

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
    if (req.params.userID == "1") {
        next();
    }
}

app.get("/api/user/:userID", checkUser, getUser);

// 12 - generics
interface IreqUsers {
    id: string,
    name: string
}

interface IresGlobal {
    status: boolean
}

app.get("/api/user/:userID/details/:name", (req: Request<IreqUsers>, res: Response<IresGlobal>) => {
    res.json({ status: true });
});

app.listen(3000, () => {
    console.log("Aplicação de TS")
})