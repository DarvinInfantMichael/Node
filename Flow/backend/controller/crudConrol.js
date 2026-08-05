import userModel from "../model/crudmodel.js";

export const postData = async(req,res) =>{

    try {
        
        const {Username,Useremail,Userage}=req.body;

        if( !Username || !Useremail || !Userage){

            return res.status(409).json({msg:"All field required.."})

        }

        const checkemail = await userModel.findOne({Useremail})

        if(checkemail){

            return res.status(400).json({msg:"User Already Exists.."})
        }

        const newData = await userModel.create({Username,Useremail,Userage})

        res.status(201).json({msg:"User Data Added Successfully..",Mydata:newData})

    } catch (error) {

        console.log("Server Error",error);
        
        res.status(500).json({msg:error.message})
        
    }
}

export const getData = async(_,res)=>{

    try {

        const getting = await userModel.find()
        
        res.status(201).json({MyData:getting})

    } catch (error) {

        console.log("Server Error",error);
        
        res.status(500).json({msg:error.message})
        
    }
}

export const putData = async(req,res)=>{

    try {

        const {id}=req.params

        const {Username,Useremail,Userage} =req.body

        if( !Username || !Useremail || !Userage){

            return res.status(409).json({msg:"All field required.."})

        }

        const update = await userModel.findByIdAndUpdate(id,{Username,Useremail,Userage},{
            new:true,
            runValidators:true
        })

        res.status(200).json({msg:"Data Updated Succefully.."})

    } catch (error) {

        console.log("Server Error",error);
        
        res.status(500).json({msg:error.message})
        
    }
}

export const deleteData = async(req,res)=>{

    try {

        const {id}=req.params

        const deleted = await userModel.findByIdAndDelete(id)

        res.status(200).json({msg:"Data Deletetd Successfully"})
        
    } catch (error) {

        console.log("Server Error",error);
        
        res.status(500).json({msg:error.message})
        
    }
}