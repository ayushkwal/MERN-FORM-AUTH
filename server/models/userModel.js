const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const {isEmail} = require('validator')
const userSchema = new mongoose.Schema({
    email:{
        required: [true,'Enter Email'],
        type: String,
        unique:[true,'Email should be unique'],
        validate:[isEmail,'Enter correct email address'],
        lowercase:true
    },
    password:{
        required:[true,'Enter Password'],
        type:String,
        default:"12345678",
        minLength: [6,'password should be atleast 6 characters']
    }
})

userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

userSchema.statics.login = async function({email,password}){
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password,user.password)
        if(auth) return user
        else throw Error('Incorrect Password')
    }
    else{
        throw Error('Email does not exist')
    }
    
}

const User = mongoose.model('user',userSchema);

module.exports = User

