import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import authRoute from "./routes/authRoute.js"
import { connectionDB } from "./config/db.js"

dotenv.config()

const app = express();

connectionDB();

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use("/api",authRoute);

app.listen (PORT,()=>{

    console.log(`Server Running at port http://localhost:${PORT}`);

})


// http://localhost:5000/api