const moongoose = require('mongoose')
// const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()

const userSchema = moongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
    },
    password:{
        type:String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    },
    isadmin:{
        type:Boolean,
        default:false
    },
    clubsupports:{
        type:String,
        require: false
    }
})

module.exports = moongoose.model('User', userSchema)