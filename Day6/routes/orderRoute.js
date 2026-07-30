import express from "express"
import { deleteOrdersD, getOrdersD, postOrdersD, putOrdersD } from "../Controller/orderController.js";

const ordersDetails = express.Router();


ordersDetails.get("/getOrder",getOrdersD);
ordersDetails.post("/posttOrder",postOrdersD);
ordersDetails.put("/putOrder/:id",putOrdersD);
ordersDetails.delete("/delteOrder/:id",deleteOrdersD);


export default ordersDetails;


// http://localhost:5000/api/orders/getOrdersD
// http://localhost:5000/api/orders/posttOrder
// http://localhost:5000/api/orders/putOrdersD
// http://localhost:5000/api/orders/deleteOrdersD