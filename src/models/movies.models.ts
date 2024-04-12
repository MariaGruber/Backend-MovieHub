import { Schema, model } from "mongoose"

interface MovieSchema {
    name: string,
    image: string,
    score: string,
    genre:string[],
    createdAt: Date,
    updatedAt: Date
}

const movieSchema =  new Schema<MovieSchema>({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },
    genre: [{
        type: Schema.Types.ObjectId, ref:"genre",
        required: true
    }],

}, {timestamps:true})

const MovieModel = model("movie", movieSchema)

export default MovieModel