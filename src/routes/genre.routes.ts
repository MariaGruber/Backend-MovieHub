import { Router } from "express"
import { createGenre, getAllGenre } from "../controllers/genre.controllers"


const genreRouter = Router()

genreRouter.get("/", getAllGenre)
genreRouter.post("/", createGenre)

export default genreRouter