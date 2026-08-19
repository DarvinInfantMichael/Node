import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username:String,
    useremail:String,
    userpassword:String

},{timestamps:true})

const userMode = mongoose.model("All Datas",userSchema);

export default userMode;