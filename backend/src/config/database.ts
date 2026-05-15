import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config({ quiet: true });

const db = process.env.DATABASE_URL || ''

mongoose.connect(db)
.then(()=> console.log("Mongodb connected successfuly."))
.catch((error)=> console.log(`Mongodb error ${error}`))
