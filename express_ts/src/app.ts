//1 - Iniciando projeto
//console.log("Iniciando projeto!");

//2 - init express
import express, { Request, Response }from 'express'

const app = express()

// 3 - rota com post
app.use(express.json());

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

app.listen(3000, () => {
    console.log("Aplicação de TS")
})