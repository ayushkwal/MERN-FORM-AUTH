const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const createToken = (id)=>{
    return jwt.sign({id},process.env.secret,{expiresIn:3*60*60*24});
}


module.exports.signin_get = (req,res)=>{
    res.render('signin')
}

module.exports.signin_post = async(req,res)=>{
    const {email,password}=req.body;
    try{
        const newUser = await User.login({email,password})
        const token =  createToken(newUser._id);
        console.log(newUser); 
        res.cookie('jwt',token,{httpOnly:true,maxAge:3000*24*60*60})
        return res.json(newUser)
    }
    catch(err){
        if(err.message.includes('Email does not exist')) return res.json({error:{email:"Email does not exist",password:""}})
        if(err.message.includes('Incorrect Password')) return res.json({error:{email:"",password:"Wrong password"}})
        return res.json({error:{email:"Something went wrong",password:""}})
    }
}

module.exports.signup_get = (req,res)=>{
    res.render('signup')
}

module.exports.signup_post = async(req,res)=>{
    const {email,password}=req.body;
    console.log(email,password)
    try{
        const newUser = await User.create({email,password})
        const token =  createToken(newUser._id);
        console.log(newUser);
        res.cookie('jwt',token,{httpOnly:true,maxAge:3000*24*60*60})
        return res.json(newUser)
    }
    catch(err){
        console.log(err.code);
        console.log("________________",err.errors)
        if(err.code===11000) return res.json({error:{email:"Email already exists",password:""}})
        return res.json({error:{email:err.errors.email?.message,password:err.errors.password?.message}})
    }
}

module.exports.signout_get = (req,res)=>{
    res.cookie('jwt','',{maxAge:1})
    res.redirect('/signin')
}

module.exports.getuser_post = async(req,res)=>{
    const {id}=req.body;
    try{
        const newUser = await User.findById(id).select({"email":1,"_id":1})
        console.log(newUser,'is new user'); 
        return res.json(newUser)
    }
    catch(err){
        return res.json({error:'Not a person'})
    }
}