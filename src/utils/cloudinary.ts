
import {v2 as cloudinary} from 'cloudinary'
import MovieModel from '../models/movies.models'

export const renameAndUpdateMovieImage = async (movieId: string, imageUrl: string) => {
    return new Promise(async (resolve, reject) => {
      const public_id = `${movieId}_poster`
      const oldFilename = imageUrl.split('/').pop()
      cloudinary.uploader.rename(
        oldFilename?.split('.')[0] ?? '',
        public_id,
        async (error: any, result: any) => {
          if (error) {
            console.log('Error renaming file:', error)
            return reject('Error renaming file in Cloudinary')
          }
          try {
            const updatedMovie = await MovieModel.findByIdAndUpdate(
                movieId,
                { image: imageUrl },
                { new: true } 
            )
            resolve(updatedMovie)
          } catch (updateError) {
            console.log('Error updating movie record:', updateError)
            reject('Error updating movie record with new image URL')
          }
        },
      )
    })
  }