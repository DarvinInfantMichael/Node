export const getOrdersD = async(req,res)=>{
    try{

        res.send("Order Details are Here");
        
    }catch(error){

        console.log(error);
        res.status(500).send("Server Error");        

    }
}

export const postOrdersD=async(req,res)=>{
    try{
        let datas = req.body
         res.status(201).json({
            message: "Orders Details Added Successfully",
            data: datas
        });
    }catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
}

export const putOrdersD=async(req,res)=>{
    try{
        res.send(`Orders Deatails Updated Sucesfully at id ${req.params.id}`)
    }catch(error){

        console.log(error);
        
        res.status(500).send("Server Error");

    }
}

export const deleteOrdersD=async(req,res)=>{
    try{
        res.send(`Orders Deatails Deleted Sucesfully at id ${req.params.id}`)
    }catch(error){

        console.log(error);
        
        res.status(500).send("Server Error");
        
    }
}