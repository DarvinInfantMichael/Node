import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import {connectionDB} from "./config/db.js"
import userRoutes from "./routes/crudRoute.js"

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

connectionDB()

app.use("/api/collect",userRoutes);

const PORT=process.env.PORT||3000

app.listen(PORT,()=>{

    console.log(`Server Running At http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/collect