import express from "express"
import { authMiddleware } from "../middleware/authmiddleware.js";
import { Dashboard, Login, Registration } from "../controller/autheControl.js";

const authRoutes =express.Router();

authRoutes.post("/register",Registration);
authRoutes.post("/login",Login);
authRoutes.get("/dash",authMiddleware,Dashboard);

export default authRoutes