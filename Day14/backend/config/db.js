import mongoose from "mongoose";

export const connectDB = async(req,res) => {

    try {

        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`Backend Running Succesfully at ${conn.connection.host}`);
       
    } catch (error) {

        console.log("Error",error);
        
        process.exit(1);
        
    }
}