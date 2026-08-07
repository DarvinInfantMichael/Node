import bcrypt from "bcrypt";
import userMode from "../models/authmodel.js";
import jwt from "jsonwebtoken"
export const Registration = async(req,res) =>{

    try {

        const {Username,Useremail,Userpassword}=req.body

        if( !Username || !Useremail || !Userpassword){

            return res.status(409).json({msg:"Reqiured All Fields"});

        }

        const check = await userMode.findOne({Useremail})

        if(check){

            return res.status(400).json({msg:"Existing Email "})

        }

        const pass = await bcrypt.hash(Userpassword,10);

        const newData = await userMode.create({Username,Useremail,Userpassword:pass})

        res.status(201).json({msg:"Sucessfully Registered"});
        
    } catch (error) {

        console.log("Server Error",error);

        res.status(500).json({msg:error.message})
        
        
    }
}

export const Login =async(req,res)=>{

    try {

        const {Useremail,Userpassword} = req.body

        if( !Useremail || !Userpassword){

            return res.status(409).json({msg:"Reqiured All Fields"});

        }

        const check = await userMode.findOne({Useremail})

        if(!check){

            return res.status(400).json({msg:"Invalid Email "})

        }

        const AccessToken = jwt.sign({id:check._id,email:check.Useremail},process.env.ACCESS_SECRET,{expiresIn:"1h"})
        const RefreshToken = jwt.sign({id:check._id,email:check.Useremail},process.env.REFRESH_SECRET,{expiresIn:"1h"})

        const compare = await bcrypt.compare(Userpassword,check.Userpassword)

        if(!compare){

            return res.status("409").json({msg:"password not Valid"});

        }

        check.RefreshToken = RefreshToken

        await check.save();

        res.status(201).json({msg:"Login Sucessfully..",RefreshToken,AccessToken,users:check})

        
    } catch (error) {

        console.log("Server Error",error);

        res.status(500).json({msg:error.message})
        
        
    }

}

export const Dashboard = async (req,res)=>{

}