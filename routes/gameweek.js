const Router = require('express').Router()
const {creategameweek} = require("../controller/gameweeek")

Router.post('/:userid/creategameweek', creategameweek )


module.exports = Router