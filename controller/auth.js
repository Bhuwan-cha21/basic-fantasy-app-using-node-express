const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
exports.createToken =  ( id) =>{
    const token =   jwt.sign({id} , process.env.jwtsecretkey , { expiresIn: 86400})
  
    return token

}
exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;


    if (token) {
      jwt.verify(token, process.env.jwtsecretkey, (err, decodedToken) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log(decodedToken);
          next();
        }
      });
    } else {
       res.send('Cannot find token')
    }
  };

exports.isAdmin =  ( req,res, next) =>{
  console.log(req.user)
  next()
}