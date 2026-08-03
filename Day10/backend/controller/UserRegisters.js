import userModel from "../model/Authuser.js"
import bcrypt from "bcrypt"

export const UserRegister =async(req,res)=>{
    try {
        const {name,email,password}=req.body

        if(!name||!email||!password){
            return res.status(400).json({msg:"Fill all the fields"})
        }

        const user=await userModel.findOne({email});

        if(user){
            return res.status(400).json({msg:"User Alredy Exists"})
        }

        const hash =await bcrypt.hash(password,10)

        const newUser = await userModel.create({name,email,password});

        res.status(201).json({msg:"Succesfully Data Added and Register"});

    } catch (error) {

        res.status(404).json("Undefined Error")
        
    }
}

export const LoginData = async (req,res)=>{
    try {

        const {email,password} =req.body

        if(!email || !password){
            return res.status(409).json("fill all fields")
        }

        const compareEmail = await userModel.find({email})

        if(!compareEmail){
            res.status(404).json({msg:"Invalid Email"})
        }

        const comparePass=await bcrypt.compare(password,compareEmail.password)

        if(!comparePass){
            return res.status(404).json({msg:"password is incorrect"})
        }


        res.status(201).json({msg:`Sucessfully Login on ${compareEmail.name}`,email:compareEmail.email,id:compareEmail.id})
        
    } catch (error) {
         res.status(404).json("Undefined Error")
    }
}