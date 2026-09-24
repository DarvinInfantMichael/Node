import mongoose, { mongo, Schema } from "mongoose";

const model = new mongoose.Schema({

            userName : String ,
            userEmail : String ,
            userPassword : String

        },{timestamps:true});

const userMode = mongoose.model(" Users Datas ",model);

export default userMode;

