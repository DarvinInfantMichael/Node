import express from "express";
import { valid,getUser } from "../Controller/userController.js";

const router = express.Router();

// // GET /api/users
// router.get("/", (req, res) => {
//   res.send("All Users");
// });

// // POST /api/users
// router.post("/", (req, res) => {
//   res.send("User Created");
// });

router.get("/",getUser)
router.post("/",valid)

export default router