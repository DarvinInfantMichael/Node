export const Registeration =async(req,res)=>{
    try {

        const { UserName,UserEmail,UserPass,UserAge }= req.body

        if(!UserName || !UserEmail || !UserPass || !UserAge){
            return res.status(409).json({msg:"All field should be filled"});
        }

        const check = await usermode.findOne(UserEmail);

        return res.status(200).json({msg:"Register Successfully"});
        
    } catch (error) {

        return res.status(500).json({msg:"Srever Error"});
        
    }
}