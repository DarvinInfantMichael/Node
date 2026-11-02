import dotenv from "dotenv"
import express from "express"
import {ConnectionDB} from "./config/db.js"
import api from "./routes/AuthRoutes.js";

dotenv.config();

const app = express();

ConnectionDB()

const PORT =process.env.PORT||3000;

app.use("/app",api);

app.listen(PORT,()=>{
    console.log(`Server Connected Successfully at http://localhost:${PORT}`);
    
})