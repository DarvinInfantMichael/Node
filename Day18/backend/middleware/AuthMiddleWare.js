import jwt from "jsonwebtoken"

export const authMiddleware = async(req,res,next)=>{
    try {
        
        const authHeader = req.headers.authorization;

        console.log(req.headers);

        if(!authHeader){
            
            return res.status(200).json({msg:"AuthHeader is Missing Here"});

        }

        const token =authHeader.split(" ")[1]

       if(!token){
            return res.status(401).json({msg:"Token Missing"})
        }
        
    } catch (error) {
        
    }

}