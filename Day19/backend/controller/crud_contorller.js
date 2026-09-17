import userMode from "../models/crud_model.js";

export const Register = async(req,res)=>{
    
    try {

        const {Username,Useremail,Userpassword} = req.body

        if(!Username || !Useremail || !Userpassword) {

            return res.status(409).json({msg:"All fields required"});

        }

        const check = await userMode.findOne({Useremail}) 

        if(check){

            return res.status(400).json({msg:"Email Already Exists"});

        }

        const newP = await bcrypt.hash(Userpassword,10);

        const newD = await userMode.create({Username,Useremail,Userpassword:newP})

        return res.status(201).json({msg:"Data Added Succesfully...."})
        
    } catch (error) {

        console.log("Server Error",error);

        res.status(500).json({msg:error.message});
        
    }
}

export const Login = async(req,res) =>{

    try {

        const {Useremail,Userpassword} = req.body

        if(!Useremail || !Userpassword) {

            return res.status(409).json({msg:"All fields required"});

        }

        const check = await userMode.findOne({Useremail}) 

        if(!check){

            return res.status(400).json({msg:"Invalid Email"});

        }

        const cmp = await bcrypt.compare(Userpassword,check.Userpassword)

            if(!cmp){

                return res.status("409").json({msg:"Password not Valid"});
            
            }

        return res.status(200).json({msg:"User Login Succesfully...."})
        
    } catch (error) {

        console.log("Server Error",error);

        res.status(500).json({msg:error.message});
        
    }
}