import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    UserName:String,
    UserEmail:String,
    UserPassword:String
},{timestamps:true});

const userMode = mongoose.model("User Datas",Schema);

export default userMode;
