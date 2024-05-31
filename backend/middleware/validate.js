const jwt = require("jsonwebtoken");
const { blackSchema } = require("../models/blackList");

const varifyToken = async(req,res,next)=>{
const accessToken = req.headers.authorization.split(' ')[1];
try {
    const isBlacklisted = await blackSchema.findOne({where:{token : accessToken}});
       if(isBlacklisted){
        res.status(404).send({error:true, message:"login please"});
       }

       var decoded = jwt.verify(accessToken, process.env.SECRETE_KEY);
       if(decoded){
        req.data.user= decoded
        next();
       }
} catch (error) {
    console.error(error.message);
    return res.send(error.message)
}
}

module.exports = {
    varifyToken
}