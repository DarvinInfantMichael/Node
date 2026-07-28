import express from "express";
import {
    getProducts,
    createProduct,
    deleteProduct
} from "../Controller/productController.js";

const proute = express.Router();

proute.get("/", getProducts);
proute.post("/", createProduct);
proute.delete("/", deleteProduct);

export default proute;