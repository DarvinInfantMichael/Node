import mongoose, { connect } from "mongoose";

export const connectionDB = async()=>{

    try {
        
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`Backend DB Connected Succesfully ${conn.connection.host}`);
        
    } catch (error) {
        
        console.log("Server Error",error);
        
        process.exit(1);

    }
}