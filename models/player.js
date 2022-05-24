const moongoose = require('mongoose')
// const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()

const playerSchema = moongoose.Schema({
    player:{
        type:String,
        required:true,
    },
    club:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true,
      
    },
    price:{
        type:String,
        required:true
    },
    point:{
        type: Array
    }
    
})


module.exports = moongoose.model('Player', playerSchema)