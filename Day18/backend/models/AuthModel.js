import mongoose from "mongoose"

const model= new mongoose.Schema({
    
    "UserName":String,
    "UserEmail":String,
    "UserPassword":String

},{timestamps:true})

const userModel = mongoose.model("UserFlow_Data",model)

export default userModel