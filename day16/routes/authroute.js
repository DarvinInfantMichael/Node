import express from "express"
import { Dashboard, Login, Registration } from "../controller/authController.js";

const authroute = express.Router();

authroute.post("/register",Registration);

authroute.post("/login",Login)

authroute.get("/dash",Dashboard)

export default authroute;

// http://locahost:5000/api/register
// http://locahost:5000/api/login
// http://locahost:5000/api/dash