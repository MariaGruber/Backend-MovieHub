import { Router } from 'express'
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  updateMovie,
} from '../controllers/movies.controllers'
import multerUploads from '../utils/multer'

const movieRoutes = Router()

movieRoutes.get('/', getAllMovies)
movieRoutes.post('/:userId', multerUploads.single('image'), createMovie)
movieRoutes.patch('/:movieId', updateMovie)
movieRoutes.delete('/:movieId', deleteMovie)

export default movieRoutes