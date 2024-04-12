import { Request, Response } from "express"
import GenreModel from "../models/genre.models"

export const getAllGenre = async (req:Request, res:Response) => {
    try { const allGenre = await GenreModel.find().populate("movies")
        res.status(200).send(allGenre)
        
    } catch (error) {
        res.status(400).send(error)
    }
}
export const createGenre = async (req:Request, res:Response) => {
    const { name } = req.body
    try {
        const newGenre = await GenreModel.create({name})
        res.status(201).send(newGenre)    
    } catch (error) {
        res.status(404).send(error)

    }
}