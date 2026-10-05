import mongoose from "mongoose"


export const ConnectionDB =async()=>{

    try {

        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`Backend Connected Successfully at ${conn.connection.host}`);
        
    } catch (error) {

        console.log("Error Occured",error);

        process.exit(1);
        
    }
}