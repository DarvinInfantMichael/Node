import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"



dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

connectDB();

app.use("/api",authRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{

    console.log(`Server Running Succefully at http://localhost:${PORT}`);

})

