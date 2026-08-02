import dotenv from "dotenv"
import express from "express"
import cors from "cors"

import Rotingprocess from "./routes/Rotingprocess.js"
import { connectionDB } from "./config/db.js"


dotenv.config()

const app = express()
const PORT=process.env.PORT||3000

app.use(cors());
app.use(express.json())

connectionDB();

app.use("/api/Details",Rotingprocess);

app.listen(PORT,()=>{
    console.log(`Server Running Sucesfully at http://localhost:${PORT}`);
    
})