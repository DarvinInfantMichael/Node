import express from "express"
import {Register} from "../controllers/authControllers.js"

const index =express.Router()

index.use("/api/ragister",Register);

export default index
