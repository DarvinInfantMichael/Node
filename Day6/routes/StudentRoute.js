import express from "express"
import { deleteData, getStudent, postStudentD, putStudentD } from "../Controller/StudentContro.js";

const studentRoute= express.Router();

studentRoute.get("/getDetails",getStudent);

studentRoute.post("/postDetails",postStudentD)

studentRoute.put("/putDetails/:id",putStudentD)

studentRoute.delete("/DeleteDatails/:id",deleteData)

export default studentRoute;


// http://localhost:5000/api/students/getDetails

// http://localhost:5000/api/students/postDetails

// http://localhost:5000/api/students/putDetails

// http://localhost:5000/api/students/DeleteDatails