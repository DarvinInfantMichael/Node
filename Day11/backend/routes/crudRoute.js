import express from "express"
import { collectData, getData } from "../controller/crudControl.js";


const crudRouter = express.Router()

crudRouter.post("/addData",collectData);
crudRouter.get("/getData",getData);

export default crudRouter

// http://localhost:5000/api/collect/addData 
// http://localhost:5000/api/collect/getData 
