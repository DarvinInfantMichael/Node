import mongoose from "mongoose";

 export const connectionDB = async()=>{
    try {
        
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`Database Backend Connected Successfully ${conn.connection.host}`);
        
    } catch (error) {

        console.log("Error",error);
        process.exist(1)
        
    }
}