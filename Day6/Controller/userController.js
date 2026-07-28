export const valid = async (req,res) =>{
    try{
         res.send("All Users");

    }catch(error){
        console.log(error);   
    }
}

export const getUser = async(req,res)=>{
    try{
        res.send("User Created");
    }catch(error){
        console.log(error);
        
    }
}