import mongoose from "mongoose";

const crudSchema = new mongoose.Schema({

    name:String,
    email:String,
    mobile:Number,
    city:String

},{timestamps:true})

const crudModel = mongoose.model("TaskData",crudSchema);

export default crudModel