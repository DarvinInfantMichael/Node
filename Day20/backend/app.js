import dotenv from "dotenv"
import express from "express"
import {ConnectionDB} from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"


dotenv.config();

const app = express();
app.use(express.json()); // This is required to parse JSON request bodies!

ConnectionDB();

const PORT =process.env.PORT||5000;

app.use("/api",authRoutes);

app.listen(PORT,()=>{

    console.log(`Server Running Succesfully at http://localhost:${PORT}`);
    
})

// https://localhost:5000/api