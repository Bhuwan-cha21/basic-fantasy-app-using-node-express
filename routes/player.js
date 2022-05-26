const Router = require('express').Router()
const {addPlayer, updatePlayer , deletePlayer, addPoint , searchplayer} = require("../Controller/player")
const {requireAuth , isAdmin} = require('../controller/auth')

Router.post('/addplayer', requireAuth, isAdmin ,addPlayer )
Router.put('/updateplayer/:id', requireAuth, isAdmin, updatePlayer)
Router.delete('/deleteplayer/:id',  requireAuth, isAdmin ,deletePlayer)
Router.put('/addpoint/:id', requireAuth,   isAdmin ,addPoint)
Router.get('/search', requireAuth, searchplayer)


module.exports = Router 