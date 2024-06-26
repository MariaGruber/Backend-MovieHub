import { Request, Response } from 'express'
import MovieModel from '../models/movies.models'
import UserModel from '../models/user.models'


export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const allMovies = await MovieModel.find().populate('createdBy', 'name')
    res.status(201).send(allMovies)
  } catch (error) {
    res.status(400).send(error)
  }
}
export const getMovieById = async (req: Request, res: Response) => {
    const _id = req.params

    try {
      const movie = await MovieModel.findById(_id)
      res.status(201).send(movie)
    } catch (error) {
      res.status(400).send(error)
    }
  }

export const createMovie = async (req: Request, res: Response) => {
  const { name, score, genre, synopsis } = req.body
  const image = req.file?.path
  const { userId } = req.params
  const createdBy = req.params.userId


  try {
    const movie = await MovieModel.create({ name, image, score, genre, synopsis, createdBy })
    await UserModel.findByIdAndUpdate({ _id: userId }, { $push: { movies: movie.id } })

    res.status(201).send(movie)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const updateMovie = async (req: Request, res: Response) => {
  const { name, url, score, synopsis } = req.body
  const image = req.file?.path
  const { movieId } = req.params

  try {
    const movieUpdated = await MovieModel.findByIdAndUpdate(
      { _id: movieId },
      { name, image, url, score, synopsis },
      { new: true },
    )
    res.status(200).send(movieUpdated)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const deleteMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params

  try {
    await MovieModel.findByIdAndDelete({ _id: movieId })
    res.status(200).send('Movie deleted')
  } catch (error) {
    res.status(400).send(error)
  }
}