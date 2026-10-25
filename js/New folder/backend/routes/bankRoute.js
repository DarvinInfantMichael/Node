import express from "express";
import { transferMoney } from "../controllers/bankController.js";

const router = express.Router();

router.post("/transfer", transferMoney);

export default router;