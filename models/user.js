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
    },
    tokens :[
       {
        token:{
            type:String,
            required: true
        }
       }
    ]
    
})
// userSchema.method.generateAuthToken = async function(){
//     // try{
//     //     let token = jwt.sign({_id : this._id}, process.env.jwtsecretkey )
//     //     this.tokens = this.tokens.concat({token:token})
//     //     await this.save()
//     //     return token
        
//     // }catch(err){
//     //     console.log(err)
//     // }
//     console.log('method')
// }
// userSchema.method('test', function(){
//     console.log("Bhuwan")
//     next()
// })
module.exports = moongoose.model('User', userSchema)