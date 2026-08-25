import express from "express"
import useMode from "../models/authModels,js"

export default Register = async(req,res) =>{

    try {

        const {username,useremail,userpassword}=req.body

        if(!username || !useremail || !userpassword){

            res.status(409).json({msg:"Enter All the fields"})

        }

        const newData = await useMode.create({username,useremail,userpassword})

        res.status(200).json({msg:"Data Registered Succesfully..."})
        
    } catch (error) {

        console.log("Server Error",error);
        
        res.status(500).json({msg:error.message})

    }
}