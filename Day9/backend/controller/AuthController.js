import userModel from "../model/Authmodels.js"

export const CreateData = async(req,res)=>{
    try {
        const {name,email,password} = req.body

        const createuser = await userModel.create({name,email,password});

        res.status(201).json({msg:"Successfully created UserData"},createuser);

    } catch (error) {
        
        res.status(500).json("Srever Error");
    }
}


export const GetDATA = async(req,res)=>{
    try {

        const getUser = await userModel.find();
        res.status(201).json("Succesfully Finded",getUser);
        
    } catch (error) {

        res.status(500).json("Server Error")
        
    }
}

export const FindbyId = async(req,res)=>{
    try {
        const id = req.params.id
        const getByid =await userModel.findById(id);
        res.status(201).json(`Successfully FindbyId${getByid}`);
        
    } catch (error) {
        res.status(500).json("Server Error")
        
    }
}


export const Updatedatass=async(req,res)=>{
try {
    const {name,email,password} = req.body
    const id=req.params.id
    const putId =await userModel.findByIdAndUpdate(id);
    res.status(201).json("Succesfully Finded",putId);
} catch (error) {

 res.status(500).json("Server Error");
    
}
}

export const DeleData = async(req,res)=>{
    try {

    const id=req.params.id
    const del = await userModel.findByIdAndDelete(id);
    res.status(201).json("Succesfully Finded",del);
        
    } catch (error) {
         res.status(500).json("Server Error");
    }
}

