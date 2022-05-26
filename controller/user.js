const User = require('../models/user')
const CryptoJS = require('crypto-js')
const dotenv = require('dotenv')
const {createToken} = require('./auth')
dotenv.config()

exports.addUser  = async (req,res) =>{

   const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        gender : req.body.gender,
        club : req.body.clubsupports,
        password: CryptoJS.AES.encrypt(
          req.body.password,
          process.env.hash_secret
        ).toString()
         
  })
        

   if(!newUser){
        res.send('Cant register')
   }
   else{
        try{
             await newUser.save()
             const token = createToken(newUser.id)
            
             res.cookie('jwt', token, { httpOnly: true, maxAge: 86400 });
             res.send(newUser)
          }catch(err){
               console.log(err)
          }
     }
}


exports.changepassowrd =  async (req,res ) =>{
     if(req.params.id === req.body.id){
         const user = await User.findByIdAndUpdate(req.body.id, { $set : req.body})
         res.send("user is udpadted")
     }else{
         res.send("you cannot change other passwrd")
     }
 }

exports.deleteaccount = async (req,res) =>{
     if(req.params.id === req.body.id){
          const user = await User.findByIdAndDelete(req.body.id)
          res.send("deleted")
      }else{
          res.send("you cannot delete others account")
      }
}

exports.login = async (req,res) =>{
        
          try{
              const user = await User.findOne({email: req.body.email});
              if(!user){
                  res.statusCode(404).send("Incorrect email")
              }
              else{
                   
                    const hashedPassword = CryptoJS.AES.decrypt(
                    user.password,
                    process.env.hash_secret
                );
                const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
                if(req.body.password === originalPassword){
                      const token = createToken(user.id)
                      res.cookie('jwt', token, { httpOnly: true, maxAge: 86400 });
                      res.send(user)
                }else{
                        res.send('incorrect password')
                }
              }
     
          }catch(err){
              res.send(err)
          }

     }