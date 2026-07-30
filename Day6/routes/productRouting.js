import express from "express";
import {
    getProducts,
    createProduct,
    deleteProduct
} from "../Controller/productController.js";

const proute = express.Router();

proute.get("/getProduct", getProducts);
proute.post("/createProduct", createProduct);
proute.delete("/deleteProduct/:id", deleteProduct);

export default proute;

// http://localhost:5000/api/products/getProduct
// http://localhost:5000/api/products/createProduct
// http://localhost:5000/api/products/deleteProduct
