
import mongoose from "mongoose"

const modelShcema = new mongoose.Schema({

    username:String,
    useremail:String,
    userpassword:String

},{timestamps:true});

const useMode = mongoose.model("regData",modelShcema);

export default useMode;