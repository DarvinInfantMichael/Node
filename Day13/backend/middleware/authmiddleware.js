import jwt, { decode } from "jsonwebtoken"

export const authMiddleware = async(req,res,next)=>{

    try {

        const authHeaders = req.headers.authorization;

        console.log(req.headers);

        if(!authHeaders){


            return res.status(401).json({msg:"Authorization Header is Missing"})


        }

        const token = authHeaders.split(" ")[1]

        if(!token){

            return res.status(401).json({msg:"Token Missing"})

        }

        const decoded =jwt.verify(token,process.env.REFRESH_SECRET)

        req.user = decoded

        next()
        
        
    } catch (error) {

        res.status(500).json({msg:"error",error})
        
    }
}