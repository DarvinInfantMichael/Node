import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    Username:String,
    Useremail:String,
    Userage:Number

},{timestamps:true})

const userModel = mongoose.model("Users Datas",userSchema);

export default userModel