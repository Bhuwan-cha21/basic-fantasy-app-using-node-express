const moongoose = require('mongoose')
// const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()

const userSchema = moongoose.Schema({
    firstname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        uniqure:true
    },
    password:{
        type:String,
        require:true
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