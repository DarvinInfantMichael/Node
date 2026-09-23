import mongoose from "mongoose";

export const ConnectionDB = async() =>{

    try {

        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`Backend Running at Connects Successfully ${conn.connection.host}`);
        
    } catch (error) {

        console.log("Error",error);
        
    }
}
