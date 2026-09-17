import dotenv from "dotenv"
import express from "express"
import { ConnectionDB } from "./config/db.js";

dotenv.config()

const app = express();

ConnectionDB()

// app.use("/api/domain",);

const PORT =process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log(`Server has ben started Succefully at https://localhost:${PORT}`);
    
})