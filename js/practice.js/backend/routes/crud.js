import express from "express"
import { deleteData, getData, postData, putData } from "../controller/crudConrol.js";

const AllData =express.Router()

AllData.post("/post",postData);
AllData.get("/get",getData);
AllData.put("/put/:id",putData);
AllData.delete("/delete/:id",deleteData);

export default AllData