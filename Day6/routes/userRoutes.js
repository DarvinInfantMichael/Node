import express from "express";

const router = express.Router();

// GET /api/users
router.get("/", (req, res) => {
  res.send("All Users");
});

// POST /api/users
router.post("/", (req, res) => {
  res.send("User Created");
});

export default router;