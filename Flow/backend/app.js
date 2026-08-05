import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import AllData from "./routes/crud.js";
import { connectionDB } from "./config/db.js";



dotenv.config()

const app =express();

app.use(cors())

app.use(express.json())

connectionDB()

app.use("/api/Details",AllData);

const PORT = process.env.PORT||3000

app.listen(PORT,()=>{
    
    console.log(`Server Running at http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/Details