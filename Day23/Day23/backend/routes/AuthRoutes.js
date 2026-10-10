import express from "express"
import {putData} from "../controller/AuthControler.js"

const app =express.Router();

app.use("/put",putData);

export default app;
