import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import RegisterData from "./routes/RegisterDatas.js";
import connectDB from "./config/db.js"


dotenv.config()

const app=express();

app.use(cors())
app.use(express.json())

connectDB()

app.use("/register",RegisterData)

const PORT = process.env.PORT||3000

app.listen(PORT,()=>{
    console.log(`Server Running at http:localhost:${PORT}`);
})