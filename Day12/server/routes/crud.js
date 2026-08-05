import express from "express"
import { addData, deleteData, getData, updateData } from "../controller/crudControl.js";

const AllData =express.Router();

//http://localhost:5000/api/get

AllData.post("/post",addData);
AllData.get("/get",getData);
AllData.put("/put/:id",updateData);
AllData.delete("/delete/:id",deleteData);

export default AllData