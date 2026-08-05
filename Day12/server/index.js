import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import AllData from "./routes/crud.js"

dotenv.config()

const app = express()

app.use(cors());

app.use(express.json());

connectDB()

const PORT = process.env.PORT ||3000;

app.use("/api",AllData);

app.listen(PORT,()=>{

    console.log(`Server Running At http://localhost:${PORT}`);
    
});

//http://localhost:5000/api


