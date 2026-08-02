import mongoose from "mongoose";

export const connectionDB =async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGODB_URL);

        console.log(`Database connected ${conn.connection.host}`);
        
    } catch (err) {

        console.log("error",err);
        
        
    }
}