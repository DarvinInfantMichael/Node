
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username:"String",
    useremail:"String",
    userpassword:"String"

},{timestamps:true})

const usermode = mongoose.model("AuthData",userSchema);

export default usermode;