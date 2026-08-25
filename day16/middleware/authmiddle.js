import jwt from "jsonwebtoken"

export const authMiddle = async(req,res,next) =>{

    try {

        const authHeader = req.headers.authorization;

        console.log(req.headers);

        if(!authHeader){

            return res.status(401).json({msg:"Authorization Header is Missing"})

        }

        const token = authHeader.split(" ")[1]

        if(!token){

            return res.status(401).json({msg:"Token Missing"})

        }

        const decode = jwt.verify(token,process.env.REFRESH_SECRET)
        
        req.user=decode

        next()
        
    } catch (error) {

        res.status(500).json({msg:"Server Error"})
        
    }
}