import express from "express"
import dotenv from "dotenv"
import welcomRoutes from "./routes/WelcomRoutes.js"

const app = express();

app.use("/Welcome",welcomRoutes);

const PORT=process.env.PORT||3000;

app.listen(PORT,(req,res)=>{
     console.log(`Server running at http://localhost:${PORT}`);
})