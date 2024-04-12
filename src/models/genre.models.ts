import { Schema, model } from "mongoose"

interface GenreSchema {
    name: string

}

const genreSchema = new Schema<GenreSchema> ({
    name: {
        type: String,
        required:true
    },

})

const GenreModel = model("genre", genreSchema)

export default GenreModel