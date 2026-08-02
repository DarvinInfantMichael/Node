import mongoose from "mongoose";

const userData = new mongoose.Schema({
    "name":String,
    "email":String,
    "password":String
},{timestamps:true})

const userModel =mongoose.model("userDetails",userData)

export default userModel;