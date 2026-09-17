import mongoose from "mongoose";

export const ConnectionDB =async () => {

    try {

        const conn = await mongoose.connect(process.env.MONGODB_URI)
        
        console.log(`Backend Has Been Connected Successfully${conn.connection.host}`);
         
    } catch (error) {

        console.log("Server Error",error);

        process.exit(1)
        
    }

}