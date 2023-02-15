const Post = require('../models/postModel')
const User = require('../models/userModel')




module.exports.allmyposts_get = async(req,res)=>{
    try{
        let posts = await Post.find({postedBy:res.locals.usered._id}).populate("postedBy","email");
        return res.json(posts)
    }catch(err){
        return res.json({message:'No posts yet'})
    }
    
}