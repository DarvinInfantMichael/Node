import usermode from "../models/authmodel.js";
import bcrypt from "bcrypt"


export const Registration = async(req,res) =>{

    try {

        const{username,useremail,userpassword}=req.body

        if(!username||!useremail||!userpassword){

            return res.status(409).json({msg:"All fields should be filled"})

        }

        if(!useremail.endsWith("@gmail.com")){

            return res.status(400).json({msg:"Email should includes @gmail.com"});

        }

        if(!userpassword > 6){

            return res.status(400).json({msg:"Password should have atleast length greater than 6"});

        }

        const check = await usermode.findOne({useremail})
        
        if(check)
        {

            return res.status(400),json({msg:"Existing Email... please login"});

        }


        const dd = await bcrypt.hash(userpassword,10);

        const newData = await usermode.create({username,useremail,userpassword:dd});

        res.status(201).json({msg:"Data Registered Succesfully...."});
        
    } catch (error) {

        console.log("Server Error",error);

        res.status(500).json({msg:error.msg})
        
    }

}

export const Login = async(req,res) =>{

    try {
        
        const{useremail,userpassword} = req.body;

        if(!useremail||!userpassword){

            res.status(400).json({msg:"All fields should be filled"})

        }

        if(!useremail.endsWith("@gmail.com")){

            return res.status(400).json({msg:"Email should includes @gmail.com"});

        }

        if(!userpassword > 6){

            return res.status(400).json({msg:"Password should have atleast length greater than 6"});

        }

        const check = await usermode.findOne({useremail})
        
        if(!check)
        {

            return res.status(400),json({msg:"Invalid Email"});

        }

        const Access = jwt.sign({id:check._id,name:check.username,email:check.useremail},process.env.ACCESS_SECRET,{expires:"1H"});
        const Reffer = jwt.sign({id:check._id,name:check.username,email:check.useremail},process.env.REFRESH_SECRET,{expires:"1H"});

        const com = await bcrypt.compare(userpassword,check.userpasseord)

        if(!com){

            res.status("409").json({msg:"Password not Valid"});

        }

        check.Reffer=Reffer

        await check.save();

        res.status(200).json({mag:"Login Sucessfully",Reffer,Access,user:check})

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