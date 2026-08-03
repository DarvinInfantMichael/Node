import express from "express"
import { LoginData, UserRegister } from "../controller/UserRegisters.js"

const RegisterData = express.Router()

RegisterData.post("/getingData",UserRegister)
RegisterData.post("/loginUser",LoginData)

export default RegisterData