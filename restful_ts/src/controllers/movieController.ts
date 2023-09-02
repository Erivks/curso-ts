import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    try {
        const body = req.body;
        const movie = await MovieModel.create(body);
        return res.status(200).json(movie);
    } catch (e: any) {
        Logger.error(`Erro ao incluir filme: ${e.message}`);
        return res.status(500).json({
            retcode: -1,
            message: `Erro ao incluir filme: ${e.message}`
        });
    }
}

export async function findMovieByID(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);
        
        if (!movie) {
            return res.status(404).json({
                retcode: -1,
                message: "O filme não foi encontrado!"
            });
        }

        return res.status(200).json(movie);
    } catch (e: any) {
        const msg: string = `Erro ao retornar filme: ${e.message}`; 
        Logger.error(msg);
        return res.status(500).json({
            retcode: -1,
            message: msg
        });
    }
}

export async function getAllMovies(req: Request, res: Response) {
    try {
        const movie = await MovieModel.find();
        return res.status(200).json(movie);
    } catch (e: any) {
        const msg: string = `Erro ao retornar filme: ${e.message}`; 
        Logger.error(msg);
        return res.status(500).json({
            retcode: -1,
            message: msg
        });
    }
}

export async function deleteMovieByID(req: Request, res: Response) {
    try {
        const id: string = req.params.id;
        await MovieModel.findByIdAndDelete(id);

        res.status(200).json({
            retcode: 0, 
            message: "Filme deletado!"
        });
    } catch (e: any) {
        const msg: string = `Erro ao deletar filme: ${e.message}`; 
        Logger.error(msg);
        return res.status(500).json({
            retcode: -1,
            message: msg
        });
    }
}

export async function updateMovieByID(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const data = req.body;

        await MovieModel.findByIdAndUpdate(id, data);
        res.status(200).json({
            retcode: 0,
            message: "Sucesso!"
        });
    } catch (e: any) {
        const msg: string = `Erro ao alterar filme: ${e.message}`; 
        Logger.error(msg);
        return res.status(500).json({
            retcode: -1,
            message: msg
        });
    }
} 