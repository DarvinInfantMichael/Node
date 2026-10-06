export const Registration =async(req,res)=>{
    try {
        
        const {UserName,UserEmail,UserPassword}=req.body;

        if(!UserName || !UserEmail || !UserPassword){

            return res.status(400).json({msg:"All Feild should be filled"});

        }

    if (!UserEmail.includes("@") || !UserEmail.includes(".")) {
    return res.status(400).json({
        msg: "Enter a valid email"
    });
}

    if (UserPassword.length < 8 ||
    !/[A-Z]/.test(UserPassword) ||
    !/[a-z]/.test(UserPassword) ||
    !/[0-9]/.test(UserPassword) ||
    !/[!@#$%^&*]/.test(UserPassword)) {

    return res.status(400).json({
        msg: "Password must contain 8 characters, uppercase, lowercase, number and special character"
    });
}

const newData = await userMode.create({UserName,UserEmail,UserPassword});

res.status(200).json({msg:"Registered Successfully"});

    } catch (error) {

        return res.status(500).json({msg:"Server Error"},error);
        
    }
}