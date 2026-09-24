import express from "express"
import { RegisterData } from "../controller/authController.js";
import {Login} from "../controller/authController.js"


const run = express.Router();

run.post("/register",RegisterData);
run.get("/login",Login);

export default run ;

// https://localhost:5000/api/register

// https://localhost:5000/api/login