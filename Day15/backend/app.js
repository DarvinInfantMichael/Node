import express from "express"
import dotenv, { config } from "dotenv"
import cors from "cors"
import { ConnectionDB } from "./config/db.js";
import authRoute from "./routes/authRoute.js";


dotenv.config();

const app =express();

ConnectionDB();

app.use(cors());

app.use(express.json())

app.use("/api",authRoute)

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{
    
    console.log(`Server Running Successfully At http://localhost:${PORT}`);
    
})


// http://localhost:5000/api
