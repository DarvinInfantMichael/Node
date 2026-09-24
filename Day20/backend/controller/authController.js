import userMode from "../models/models.js";
import bcrypt, { compare } from "bcrypt"

export const RegisterData = async ( req , res ) =>{

    try {
        
        const{userName,userEmail,userPassword} = req.body;

        if(!userName||!userEmail||!userPassword){

            return res.status(409).json({msg:"All field required"});

        }

        const check = await userMode.findOne({userEmail})

        if(check){

            return res.status(400).json({msg:"User Already Exist..."});

        }

        const dtd = await bcrypt.hash(userPassword, 10)

        const newData = await userMode.create({userName,userEmail,userPassword:dtd});

            res.status(201).json({msg:"Registered Succesfully..."});

    } catch (error) {

            console.log("Server Error",error);

            res.status(500).json({msg:error});
        
    }
}

export const Login = async ( req , res ) =>{

    try {
        
        const{userEmail,userPassword} = req.body;

        if(!userEmail||!userPassword){

            return res.status(409).json({msg:"All field required"});

        }

        const check = await userMode.findOne({userEmail})

        if(!check){

            return res.status(400).json({msg:"User Invalid Already Exist..."});

        }

        const comp = await bcrypt.compare(userPassword,check.userPassword);
        
        if(!comp){
            return res.status(409).json({msg:"Password Incorrect"})
        }

        res.status(200).json({msg:"Login Succesfully..."});

    } catch (error) {

        console.log("Server Error",error);

        res.status(500).json({msg:error});
        
    }
}



