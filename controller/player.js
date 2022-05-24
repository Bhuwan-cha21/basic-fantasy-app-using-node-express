const Player = require('../models/player')
const CryptoJS = require('crypto-js')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()

exports.addPlayer  = async (req,res) =>{

   const newPlayer = new Player({
        player: req.body.player,
        club: req.body.club,
        position: req.body.position,
        gender : req.body.gender,
        price: req.body.price
  })
  if(!newPlayer){
    res.send('Cant add')
}
else{
    try{
         await newPlayer.save()
         console.log('Saved')
         res.send(newPlayer)
      }catch(err){
           console.log(err)
      }
 }
}

exports.updatePlayer = async (req,res) =>{
     try{
        const user =   await Player.findByIdAndUpdate(req.params.id ,  { $set : req.body})
     
     }catch{
          res.send('Cannot update player')
     }

}
exports.deletePlayer = async (req,res) =>{
     try{
        const player =   await Player.findByIdAndDelete(req.params.id)
        res.send(player)
     }catch{
          res.send('Cannot update player')
     }
}
exports.addPoint = async (req,res) =>{
    
     try{
          const player = await Player.findById(req.params.id)
          await player.updateOne({ $push :{ point : req.body.point}})
          res.send("Point added")
     }catch{
          res.send("Cannot find player")
     }
}
exports.searchplayer =  async (req ,res) =>{
     club = req.query.club
     position = req.query.position
      if (club && !position){
          let data = await Player.find({club: club})
          res.json(data)
      }
      if (club && position){
           let data = await Player.find(
                {
                     $and :[
                         {club: club},
                         {position : position}
                     ]
                }
           )
           res.send(data)
      }
      if( !club && position){
          let data = await Player.find({position: position})
          res.json(data)
      }
}
