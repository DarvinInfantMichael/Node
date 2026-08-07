import express from "express";
import { Dashboard, Login, Registration } from "../controller/authController.js";
import { authMiddleware } from "../middleware/authmiddleware.js";

const AuthData = express.Router()

AuthData.post("/register",Registration);
AuthData.post("/login",Login);
AuthData.get("/dash",authMiddleware,Dashboard);

export default AuthData;


// http://localhost:5000/api/register

// http://localhost:5000/api/login
// http://localhost:5000/api/dash

