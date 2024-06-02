import express from "express"
import userRouter from "./routes/user.routes"
import movieRoutes from "./routes/movies.routes"
import genreRoutes from "./routes/genre.routes"
import bodyParserMiddleware from "./utils/bodyparser"
import cors from "cors"


const app = express();
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 201,
    methods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS' 
  }


app.use(express.json())
//app.use(bodyParserMiddleware)
app.use(express.urlencoded({ extended: true }))


app.use('/user', userRouter)
app.use('/movies',cors(corsOptions), movieRoutes)
app.use('/genre', genreRoutes)

export default app;