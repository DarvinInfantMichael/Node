import userModel from "../models/crudmodel.js"

export const addData = async( req,res )=>{

    try {

        const {Username,Useremail,Userage,Usercourse} = req.body

        if( !Username || !Useremail || !Userage || !Usercourse ){

            return res.status(409).json({msg:"Required All Fields"})

        }

        const checkmail = await userModel.findOne({ Useremail })

        if (checkmail) {
            
            return res.status(409).json({msg:"Email Already Exists"})

        }

        const newUser = await userModel.create({Username,Useremail,Userage,Usercourse});

        res.status(200).json({msg:"Data Added Succesfully....",MyData:newUser})
        
    } catch (error) {

        console.log("Server Error",error);
        
        res.status(500).json({msg:error.message})

    }
}

export const getData = async (_,res) =>{

    try {

        const gett = await userModel.find();

        res.status(201).json({MyData:gett})


    } catch (error) {

        console.log("Server Error",error);

        res.status(500).json({msg:error.message})
        
    }
}

export const updateData = async(req,res) =>{

    try {

        const {id} = req.params

        const {Username,Useremail,Userage,Usercourse}=req.body

         if( !Username || !Useremail || !Userage || !Usercourse ){

            return res.status(409).json({msg:"Required All Fields"})

        }

        const update = await userModel.findByIdAndUpdate(id,{Username,Useremail,Userage,Usercourse},{
            new:true,runValidators:true
        });

        res.status(200).json({msg:"Data Updated Successfully.."})

    } catch (error) {

        console.log(" Server Error ",error);

        res.status(500).json({msg:error.message})
        
    }
}

export const deleteData = async(req,res)=>{

    try {

        const{id}=req.params

        const deletedData = await  userModel.findByIdAndDelete(id);

        res.status(200).json({msg:"Data Deleted Succesfully..."})
        
    } catch (error) {

        console.log("Server Error",error);

        res.status(500).json({msg:error.message});
    }
}