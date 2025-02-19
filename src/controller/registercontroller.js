exports.registerclient = async(req,res)=>{
    try{
        // Ensure the request body has the correct field names
        const regist = await registercon.create({
            name: req.body.name,
            email: req.body.email, // Ensure this matches the updated schema
            phone: req.body.phone,
            message: req.body.message
        });
        res.status(200).json(regist);
    }catch (error){
        res.status(500).send(error);
    }
} 