import mongoose from "mongoose";

export const connectionDB = async() =>{

    try {

        const conn = await mongoose.connect(process.env.MONGODB_URI)

        console.log(`Backend Running Successfully at ${conn.connection.host}`);
        
    } catch (error) {

        console.log("Error",error);

        process.exit(1);
        
    }

}