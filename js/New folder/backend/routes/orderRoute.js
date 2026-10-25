import express from "express"
import {createOrderService} from "../services/orderService.js"

const Orderrouter = express.Router();

Orderrouter.post("/orderSys",createOrderService);

export default Orderrouter