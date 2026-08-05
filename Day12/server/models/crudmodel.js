import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({

    Username:String,
    Useremail:String,
    Userage:Number,
    Usercourse:String

},{timestamps:true});

const userModel = mongoose.model("AllData",dataSchema);

export default userModel 