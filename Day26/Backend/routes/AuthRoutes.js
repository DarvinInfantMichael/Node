import express from "express"
import {Registeration} from "../controller/Authcontroller.js"

const api = express.Router();

api.post("/push",Registeration);

export default api