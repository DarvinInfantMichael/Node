import mongoose from "mongoose";

export const connectDB = async() =>{

    try {
        
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`DataBase Connected Succesfully ${conn.connection.host}`);

    } catch (error) {

        console.log("Error",error);

        process.exit(1);
        
    }
}