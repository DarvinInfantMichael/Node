import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    Username : String,
    Useremail:String,
    Userpassword:String
},{timestamps:true})

const userMode=mongoose.model("User Datas",userSchema);
export default userMode