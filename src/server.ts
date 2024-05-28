import express from "express";
import userRouter from "./routes/user.routes";
import movieRoutes from "./routes/movies.routes";
import genreRoutes from "./routes/genre.routes";

const app = express();

app.use(express.json())
app.use('/user', userRouter)
app.use('/movies', movieRoutes)
app.use('/genre', genreRoutes)

export default app;