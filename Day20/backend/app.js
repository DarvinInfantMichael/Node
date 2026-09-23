import dotenv from "dotenv"
import express from "express"
import {ConnectionDB} from "./config/db.js"


dotenv.config();

const app = express();

ConnectionDB();

const PORT =process.env.PORT||5000;

app.listen(PORT,()=>{

    console.log(`Server Running Succesfully at https://localhost:${PORT}`);
    
})