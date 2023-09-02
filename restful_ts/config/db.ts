import mongoose from "mongoose";
import config from 'config';
import Logger from '../config/logger';

async function connect() {
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        Logger.info("Banco conectado com sucesso!");
    } catch (e) {
        Logger.error(`Erro ao realizar conexão com o banco: ${e}`);
    }
}

export default connect;