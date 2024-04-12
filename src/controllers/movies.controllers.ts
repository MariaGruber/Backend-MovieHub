import { Request, Response } from "express"
import MovieModel from "../models/movies.models"
import UserModel from "../models/user.models"

export const createMovie = async (req:Request, res:Response) => {
    const {name, image, genre, score} = req.body
    const { userId } = req.params
    try {
        const movie = await MovieModel.create({name, image, genre, score})
        await UserModel.findByIdAndUpdate(
            {_id:userId}, 
            {$push: {movies: movie._id}}, 
            {})
        res.status(201).send(movie)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getAllMovies = async (req:Request, res:Response) => {
    try { const allMovies = await MovieModel.find()
        res.status(200).send(allMovies)
        
    } catch (error) {
        res.status(400).send(error)
    }
}

export const updateMovie = async (req: Request, res: Response) => {
    const { name, image, genre_id } = req.body;
    const { movieId } = req.params;

    try {
        const movieUpdate = await MovieModel.findByIdAndUpdate(
            movieId,
            { name, image, $set: {genre: genre_id}},
            { new: true }
        );
        res.status(200).send(movieUpdate);

    } catch (error) {
        res.status(400).send(error);
    }
};
export const deleteMovies = async (req:Request, res:Response) => {
    const { movieId } = req.params

    try {
        const movieDeleted = await MovieModel.findByIdAndDelete({_id:movieId})
        res.status(200).send(movieDeleted)

    } catch (error) {
        res.status(400).send(error)
    }
}