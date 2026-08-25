import express from "express"
import dotenv from "dotenv"
import {ConnectionDB} from "./config/db.js"

dotenv.config()

const app =express()

ConnectionDB();

const PORT = process.env.PORT||3000

app.listen(PORT,()=>{

    console.log(`Server Running Successfully https://localhost:${PORT}`)

})