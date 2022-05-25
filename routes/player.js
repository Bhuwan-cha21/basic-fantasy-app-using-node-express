const Router = require('express').Router()
const {addPlayer, updatePlayer , deletePlayer, addPoint , searchplayer} = require("../Controller/player")
const {requireAuth , isAdmin} = require('../controller/auth')

Router.post('/addplayer', requireAuth ,addPlayer )
Router.put('/updateplayer/:id', requireAuth, updatePlayer)
Router.delete('/deleteplayer/:id',  requireAuth ,deletePlayer)
Router.put('/addpoint/:id', requireAuth,  addPoint)
Router.get('/search', requireAuth, isAdmin , searchplayer)


module.exports = Router