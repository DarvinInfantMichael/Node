import express from "express"
import { Dashboard, Login, Registration } from "../controller/authController.js";


const authRoute =express.Router();

authRoute.post("/register",Registration);
authRoute.post("/login",Login);
authRoute.get("/dash",Dashboard)

export default authRoute;


// http://localhost:5000/api/register
// http://localhost:5000/api/login
// http://localhost:5000/api/dash