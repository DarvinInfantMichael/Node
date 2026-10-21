import dotenv from "dotenv"
import express from "express"
import { ConnectionDB } from "./config/db.js";

dotenv.config()

const app = express();

app.use("/api/bank", bankRoutes);

ConnectionDB()

const PORT = process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`Server Running Successfully at http://localhost/${PORT}`);
    
})
