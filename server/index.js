import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv"
// import route from "./routes/"

const app =express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

const PORT =process.env.PORT || 8976
const MONGOURL =process.env.MONGO_URL

mongoose.connect(MONGOURL).then(()=>{
    console.log("Mongodb Connection Success....")
    app.listen(PORT,()=>{
        console.log(`Server Listening Port ${PORT}...`)
    })
}).catch((err)=>{
    console.log("error:",err.toString())
})