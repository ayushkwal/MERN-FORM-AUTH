const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types
const User = require('../models/userModel')
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,   
    },
    postedBy:{
        type:ObjectId,
        ref:User
    }
})




const Post = mongoose.model('post',postSchema);

module.exports = Post

