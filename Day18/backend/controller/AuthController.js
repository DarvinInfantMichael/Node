import userModel from "../models/AuthModel.js";
import bcrypt from "bcrypt";

export const Register = async (req,res) =>{

    try {

        const {UserName,UserEmail,UserPassword} = req.body

        if(!UserName||!UserEmail||!UserPassword){

           return res.status(409).json({msg:"Server Error"});

        }

        const check = await userModel.findOne({UserEmail})

        if(check){

            return res.status(400).json({msg:"User Already Exists"})

        }

        const edd = await bcrypt.hash(UserPassword,10);

        const newData = await userModel.create({UserName,UserEmail,UserPassword:edd})

        res.status(200).json({msg:"Data Added Succesfully...."})

    } catch (error) {

        return res.status(500).json({msg:"Server Error"})
        
    }

}

export const Login = async (req, res) => {
    try {
        const { UserEmail, UserPassword } = req.body;

        if (!UserEmail || !UserPassword) {
            return res.status(409).json({
                msg: "Email and password are required"
            });
        }

        const check = await userModel.findOne({ UserEmail });

        if (!check) {
            return res.status(400).json({
                msg: "Invalid User Data"
            });
        }
        const Access = jwt.sign({id:check._id,name:check.UserName,email:check.UserEmail},process.env.ACCESS_TOKEN,{expiresIn:"1H"});
        const Refresh = jwt.sign({id:check._id,name:check.UserName,email:check.UserEmail},process.env.REFRESH_TOKEN,{expiresIn:"1H"});

        const dummy = await bcrypt.compare(
            UserPassword,
            check.UserPassword
        );

        if (!dummy) {
            return res.status(400).json({
                msg: "User Password is Incorrect"
            });
        }

        check.Refresh=Refresh
        await check.save();

        return res.status(200).json({
            msg: "Login Successfully",
            Refresh,
            Access,
            user:check
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            msg: "Server Error"
        });
    }
};


export const Dashboard =(req,res)=>{

    try {

        return res.status(200).json({msg:req.check})
        
    } catch (error) {

        res.status(500).json({msg:"Server Error"});
        
    }

}