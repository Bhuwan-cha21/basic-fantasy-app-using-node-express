const moongoose = require('mongoose')
// const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()

const gameweekSchema  = moongoose.Schema({
    players:{
        type:Array,
       
        
    },
     user: {
        type: moongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'A booking must belong to a user']
    },
    
})
module.exports = moongoose.model('Gameweek', gameweekSchema)