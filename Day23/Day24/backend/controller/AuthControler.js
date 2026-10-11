export const putData = async(req,res)=>{

    try {

        const {UserName,UserEmail,UserPassword}=req.body;

        if(!UserName ||!UserEmail ||!UserPassword){

            res.status(400).json({msg:"Field must be filled"});

        }

        const check=
        
    } catch (error) {
        
    }

}