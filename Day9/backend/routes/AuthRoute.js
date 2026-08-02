import express from "express"
import { CreateData, DeleData, FindbyId, GetDATA, Updatedatass } from "../controller/AuthController.js";

const operation = express.Router();

operation.post("/AllData",CreateData)

operation.get("/getData",GetDATA)

operation.get("/findbyid/:id",FindbyId)

operation.put("/updateData/:id",Updatedatass)

operation.delete("/delete/:id",DeleData)
export default operation