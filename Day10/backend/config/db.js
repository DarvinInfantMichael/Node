import mongoose from "mongoose"

const connectDB= async()=>{
    try {

        const conn =await mongoose.connect(process.env.MONGODB_URI)

        console.log(`DataBase Connected Succefully ${conn.connection.host}`);
        
    } catch (error) {

        console.log("error",error);
        process.exist(1);
        
        
    }
}

export default connectDB