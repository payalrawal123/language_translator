const express = require("express");
require("dotenv").config();
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel } = require("../models/userModel");
const { blackSchema } = require("../models/blackList");




userRouter.post("/register",async(req,res)=>{
    const {name, email, password} = req.body;
    const saltRounds = 10;
    try {
        const hashPassword = await bcrypt.hash(password,saltRounds);
        const isUser = await userModel.create({name, email, password : hashPassword});
        return  res.status(200).send({error:false, items:isUser});
    } catch (error) {
        res.status(500).send({error:true, message:(error.message)});
    }
})




userRouter.post("/login", async(req,res)=>{
    const { email, password} = req.body;
    try {
        const isExist = await userModel.findOne({where:{ email}});
        const checkPassword = await bcrypt.compare(password,isExist.password);
        if(checkPassword){
          const accessToken = jwt.sign({
            data: ({name:isExist.name, email: isExist.email})
          }, process.env.SECRETE_KEY, { expiresIn: '2h' });
          return  res.status(200).send({error:false, items:accessToken});
        }
    } catch (error) {
        res.status(500).send({error:true, message:(error.message)});
    }
})

userRouter.post("/logout", async(req,res)=>{
    const accessToken = req.header.authorizartion;
    try {
        const isBlacklisted = await blackSchema.findOne({where:{token : accessToken}});
        if(isBlacklisted){
            const newblacklist = new blackSchema.create({token: accessToken});
return res.status(200).send({error:false, items:newblacklist});
        }
    } catch (error) {
        res.status(500).send({error:true, message:(error.message)});
    }
})

module.exports = {
    userRouter
}