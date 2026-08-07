import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    Username:String,
    Useremail:String,
    Userpassword:String

},{timestamps:true})

const userMode = mongoose.model("All Data",userSchema);

export default userMode