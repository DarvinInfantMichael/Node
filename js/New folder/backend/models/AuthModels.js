import mongoose, { connect, Schema } from "mongoose";

const schema = new mongoose.Schema
({
    UserName:String,
    UserEmail:String,
    UserPassword:String
},{timestamps:true});

const userMode = mongoose.model("User Flow Details",schema);

export default userMode

