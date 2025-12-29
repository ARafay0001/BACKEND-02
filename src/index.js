// require("dotenv").config({path: "./env"})
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
  path: ".env",
});

import connectDB from "./DB/database.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, (res, req) => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
    app.get("/", (req, res) => {
      res.send("Hello World");
    });
    console.log("listning app", process.env.PORT);
  })
  .catch((error) => {
    console.log("Error while connecting to DB", error);
  });

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
