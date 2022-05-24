const req = require('express/lib/request')
const Gameweek = require('../models/gameweek')

exports.creategameweek = async(req,res) =>{
   try{
        const newGameweek = new Gameweek({
            user : req.params.userid
        })
        newGameweek.save()
        res.send("New gameweek created")
    
   }catch(err){
            res.send(err)
   }
   
}

