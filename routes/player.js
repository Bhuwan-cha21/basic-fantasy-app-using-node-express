const Router = require('express').Router()
const {addPlayer, updatePlayer , deletePlayer, addPoint , searchplayer} = require("../Controller/player")

Router.post('/addplayer', addPlayer )
Router.put('/updateplayer/:id', updatePlayer)
Router.delete('/deleteplayer/:id', deletePlayer)
Router.put('/addpoint/:id', addPoint)
Router.get('/search', searchplayer)


module.exports = Router