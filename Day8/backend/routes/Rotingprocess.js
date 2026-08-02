import express from "express"
import {Controllll} from "../controller/Controlss.js"

const routep=express.Router()

routep.post("/routing",Controllll);

export default routep 
