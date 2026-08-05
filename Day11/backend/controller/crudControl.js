import crudModel from "../models/crudModels.js"

export const collectData = async(req,res)=>{

    try {
        
        const {name,email,mobile,city}=req.body

        if(!name || !email || !mobile || !city){

           return res.status(409).json({msg:"All fields Should be filled"})

        }

        const checkemail =await crudModel.findOne({email});

        if(checkemail){

            return res.status(400).json({msg:"Useremail Already Exists"})
        }

        const newData = await crudModel.create({name,email,mobile,city});

        res.status(201).json({

            success: true,
            msg: "Data Added Successfully",
            data: newData});

    } catch (error) {

        res.status(500).json({
            
            success: false,
            msg: error.message})
        
    }
}

export const getData = async(req,res)=>{

    try {

        const gettt = await crudModel.find();

        res.status(200).json({

            success: true,
            count: gettt.length,
            MyData: gettt})
        
    } catch (error) {
        
        res.status(500).json({
            
            success: false,
            msg: error.message})
    }
}