import dotenv from "dotenv";
import express from "express";
import { ConnectionDB } from "./config/db.js";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js"

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json())

app.use("/api",AuthRoutes)

ConnectionDB();

const PORT = process.env.PORT||3000

app.listen(PORT,()=>{

    console.log(`Srever Running At Port http://localhost:${PORT}`);
    
})

// http://localhost:5000/api