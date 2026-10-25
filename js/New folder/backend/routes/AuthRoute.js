import express from "express";

import {
    Registeration,
    Login,
    Dashboard
} from "../controllers/authController.js";

import { authMiddleware } from "../middleware/AuthMiddleware.js";

const router = express.Router();

// Public Routes
router.post("/register", Registeration);
router.post("/login", Login);

// Protected Route
router.get("/dashboard", authMiddleware, Dashboard);

export default router;