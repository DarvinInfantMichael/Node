import dotenv from "dotenv"
import express from "express"
import { connectionDB } from "./config/db.js";
import authroute from "./routes/authroute.js";
import cors from "cors"


dotenv.config()

const app=express();

app.use(cors());

app.use(express.json())

connectionDB()

app.use("/api",authroute)

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{

    console.log(`Server Running Succesfully at http://locahost:${PORT}`)
    
});


// http://locahost:5000/api