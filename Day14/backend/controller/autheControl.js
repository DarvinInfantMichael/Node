import userMode from "../models/authmodels.js";
import jwt from "jsonwebtoken"

export const Registration = async(req,res) =>{

    try {

        const {username,useremail,userpassword}=req.body

        if(!username||!userpassword||!useremail){

            return res.status(409).json({msg:"required all fields"});

        }

        if(!useremail.endswith("@gmail.com")){

            return res.status(400).json({msg:"Email must include @gmail.com."})

        }

        if(userpassword.length<6){

            return res.status(400).json({ msg: "Password must contain at least 6 characters." });

        }

        const check = await userMode.findOne({useremail});

         if(check){

            return res.status(400).json({msg:"Existing Email "})

        }

        const pass = await bcrypt.hash(userpassword,10);

        const newData = await userMode.create({username,useremail,userpassword:pass})

        res.status(201).json({msg:"Sucessfully Registered"});
        
    } catch (error) {

        console.log("Server Error",error);

        res.status(500).json({msg:error.message})
        
        
    }
}


export const Login = async() =>{

    try {
        
        const {useremail,userpassword}=req.body

        if(!useremail||!userpassword){
            return res.status(409).json({msg:"Required All fields"})
        }

        const check = await userMode.findOne({useremail})

        if(!check){
            return res.status(400).json({msg:"Invalid Email"})
        }

        const AccessToken =jwt.sign({id:check._id,name:check.username,email:check.useremail},process.env.ACCESS_SECRET,{expiresIn:"1h"});
        const ReferenceToken = jwt.sign({id:check._id,name:check.username,email:check.useremail},process.env.REFRESH_SECRET,{expiresIn:"1h"})

        const compare = await bcrypt.compare(userpassword,check.userpassword)

        if(!compare){

            return res.status("409").json({msg:"password not valid"})

        }

        check.ReferenceToken=ReferenceToken

        await check.save();

        res.status(200).json({msg:"Login Successfully..",ReferenceToken,AccessToken,user:check})

    } catch (error) {

        console.log("Server Error",error);

        res.status(500).json({msg:error.message})
        
        
    }

}

export const Dashboard = async (req,res)=>{

    try {
        
        return res.status(200).json({msg:req.check})

    } catch (error) {

        res.status(500).json({msg:"Server Error"})
        
    }

}