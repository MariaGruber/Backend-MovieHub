import { Router } from "express";
import { createMovie, deleteMovies, getAllMovies, updateMovie } from "../controllers/movies.controllers";

const movieRouter = Router()

movieRouter.post("/:userId", createMovie)
movieRouter.get("/", getAllMovies)
movieRouter.patch("/:movieId", updateMovie)
movieRouter.delete("/:movieId", deleteMovies)

export default movieRouter