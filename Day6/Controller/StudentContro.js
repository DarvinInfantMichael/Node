export const getStudent =async(req,res)=>{
try{

    res.send("All Students Dtails are Here");

}catch(error){

    console.log(error);
    res.status(500).send("Server Error");

}
}

export const postStudentD = async(req,res)=>{
    try{
        res.send("Student Details Added Succesfully..");
    }catch(error){
        console.log(error);
        res.status(500).send("Server Error");   
    }
}

export const putStudentD = async(req,res)=>{
    try{
        res.send(`Student Details Updated ${req.params.id} Successfully...`)
    }catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
}

export const deleteData = async(req,res)=>{
    try{
        res.send(`Student details from ${req.params.id} Deleted Succesfully`)

    }catch(error){
        console.log(error);
        res.status(500).send("Server Error");
        

    }
}