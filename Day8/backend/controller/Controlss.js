export const Controllll =async(req,res)=>{
    try {
        res.status(201).josn({msg:"Hello World"})
    } catch (error) {
        res.status(500).json(error)
    }
}