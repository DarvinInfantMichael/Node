import mongoose from "mongoose";

export const ConnectionDB =async()=>{

    try {

        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`Backend also Connected and Executed Sucessfully ${conn.connection.host}`);
        
        
    } catch (error) {

        console.log("Server Error",error);
        
    }

}