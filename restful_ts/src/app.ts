require("dotenv").config();
import express from 'express';
import config from 'config';
import router from './router';
import db from '../config/db';
import Logger from '../config/logger';
import morganMiddleware from './middleware/morganMiddleware';

const app = express();

// middleware
app.use(express.json());
app.use(morganMiddleware);

// Setando prefixo de rota e importando rotas configuradas
app.use("/api/", router);

const port: number = config.get<number>("port");

app.listen(port, async () => {
    await db();

    Logger.info(`Aplicação rodando na porta ${port}!`);
});