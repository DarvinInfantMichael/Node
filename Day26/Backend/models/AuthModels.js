import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

"UserName": String,
"UserEmail": String,
"UserPassword":String,
"UserAge":String

},{timestamps:true});

const usermode = mongoose.model("Userdt",userSchema);

export default usermode