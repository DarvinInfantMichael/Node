export const Registeration = async(req,res) =>{

    try {

        const { UserName , UserEmail , UserPassword }=req.body;

        if{!UserName || !UserEmail || !UserPassword}{

            return res.status(400).json({msg:"All feilds should filled"});

        }
        
    } catch (error) {
        
    }
}