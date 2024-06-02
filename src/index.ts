import app from "./server"
import config from "./config/config"
import dotevn from 'dotenv'
dotevn.config()
import './config/cloudinaryconfig'
import connect from "./db/db"

console.log("==>", config)

const PORT = config.app.PORT

connect().then(() =>
    app.listen(PORT, () => console.log(`server is running on port ${PORT} and is connected to db`))
)

