import mongoose from "mongoose";

export const ConnectionDB = async() =>{

    try {   

        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Backend has been Connected at ${conn.connection.host}`);
        
    } catch (error) {

        console.log("Error Occured",error);

        process.exit(1);
        
    }

}