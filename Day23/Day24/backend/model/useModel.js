import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    UserName:String,
    UserEmail:String,
    UserPasswrod:String

},{timestamps:true});

const userMode = mongoose.model("User FData",userSchema);

export default userMode