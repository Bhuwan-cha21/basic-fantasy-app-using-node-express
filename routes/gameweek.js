const Router = require('express').Router()
const {creategameweek} = require("../controller/gameweeek")
const {requireAuth , isAdmin} = require('../controller/auth')

Router.post('/:userid/creategameweek',  requireAuth , creategameweek )


module.exports = Router