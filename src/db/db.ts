import mongoose from 'mongoose'
import config from '../config/config'


/* When I tried to follow what was said during the livecoding, I encountered that if I did't declare connect specifically as a promise it would keep my index.ts crashing*/ 

const connect = async () => {
   await mongoose.connect(config.db.URI) }


export default connect