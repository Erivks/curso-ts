import { Router, Request, Response } from 'express';
import { createMovie, deleteMovieByID, findMovieByID, getAllMovies, updateMovieByID } from './controllers/movieController';
import { validate } from './middleware/handleValidation';
import { movieValidator } from './middleware/movieValidation';

const router = Router();

export default router
    .get("/test", (req: Request, res: Response) => {
        res.status(200).json({
            retcode: 0,
            message: "OK!"
        });
    })
    .post("/movie", movieValidator(), validate, createMovie)
    .get("/movie/:id", findMovieByID)
    .get("/movie/getAll", getAllMovies)
    .delete("/movie/deleteByID/:id", deleteMovieByID)
    .patch("/movie/updateByID/:id", updateMovieByID)