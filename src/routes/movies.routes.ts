import { Router } from 'express'
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} from '../controllers/movies.controllers'
import multerUploads from '../utils/multer'

const movieRoutes = Router()

movieRoutes.get('/', getAllMovies)
movieRoutes.get('/:_id', getMovieById)
movieRoutes.post('/:userId', multerUploads.single('image'), createMovie)
movieRoutes.patch('/:movieId', multerUploads.single('image'), updateMovie)
movieRoutes.delete('/:movieId', deleteMovie)

export default movieRoutes