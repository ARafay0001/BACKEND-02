// require("dotenv").config({path: "./env"})
import dotenv from "dotenv"

dotenv.config({
    path: '../env'
})

import connectDB from "./DB/database.js"


connectDB()








// import express from 'express'
// const app = express()





// //connecting DB with iffy function

// ;( async () => {
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      
//       app.on("error", (error)=> {
//         console.log("error")
//         throw error
//       })

//       app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`)
//       })
    
    
//     } catch (error) {
//         console.log("error");
//         throw error
//     }
// })