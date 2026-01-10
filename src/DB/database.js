import mongoose from "mongoose"
import DB_NAME from "../utils/constants.js"


// import express from 'express'
// const app = express()





//connecting DB with iffy function

const connectDB = async () => {
    try {

      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      console.log("ConnectionInstance :", connectionInstance.connection.host)
    
    } catch (error) {
        console.log("Mongo DB connection error" , error);
        process.exit(1)
    }
}


export default connectDB