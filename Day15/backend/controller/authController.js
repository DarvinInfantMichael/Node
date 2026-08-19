import usermode from "../models/authmodels.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const Registration = async(req,res) =>{

    try {

        console.log("Body:",req.body);
        
        const{username,useremail,userpassword}=req.body

        if(!username||!useremail||!userpassword){

            return res.status(400).json({msg:"All Fields Should Required"});

        }

        if(!useremail.endsWith("@gmail.com")){

            return res.status(400).json({msg:"Email should includes @gmail.com"});

        }

        if(userpassword.length < 6){

            return res.status(400).json({msg:"Password Length should greater than 6"});

        }

        const check = await usermode.findOne({useremail});

        if(check){

            return res.status(400).json({msg:"Existing Email"});

        }

        const dumy = await bcrypt.hash(userpassword,10);

        const newData = await usermode.create({username,useremail,userpassword:dumy});

        res.status(201).json({msg:"Data Registered Succesfully..."})

    } catch (error) {

        console.log("Server Error",error);

        res.status(500).json({msg:error.msg});
        
    }
}

export const Login = async(req,res) =>{

    try {

        const{useremail,userpassword} = req.body

        if(!useremail||!userpassword){

            return res.status(400).json({msg:"All Fields Should Required"});

        }
        
        const check = await usermode.findOne({useremail});

        if(!check){

            return res.status(400).json({msg:"Invalid Email"});

        }

        const AcesToken =jwt.sign({id:check._id,name:check.username,email:check.useremail},process.env.ACCESS_SECRET,{expiresIn:"1H"});
        const RefeToken =jwt.sign({id:check._id,name:check.username,email:check.useremail},process.env.REFRESH_SECRET,{expiresIn:"1h"});

        const comp = await bcrypt.compare(userpassword,check.userpassword)

        if(!comp){

            return res.status("409").json({msg:"Password not Valid"});

        }

        check.RefeToken=RefeToken

        await check.save();

        res.status(200).json({msg:"Login Succesfully..",RefeToken,AcesToken,user:check})

        
    } catch (error) {

        console.log("Server Error",error);

        res.status(500).json({msg:error.msg})
        
        
    }

}
export const Dashboard = async(req,res)=>{

    try {
        
        return res.status(200).json({msg:req.check})

    } catch (error) {

        res.status(500).json({msg:"Server Error"})
        
    }
    

}