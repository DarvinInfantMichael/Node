import express from "express";
import { Login, Register } from "../controller/AuthController.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);

export default router;

// http://localhost:5000/api/register
// http://localhost:5000/api/login