const express = require('express')
const connectDB = require('./database/connection')
const app = express()
const userRoute = require('./Routes/user')
const playerRoute = require('./Routes/Player')
const gameweekRoute = require('./Routes/gameweek')
const dotenv = require('dotenv')
connectDB()
dotenv.config()
app.get('/' , (req,res) =>{
    res.send('Bhuwan')
})
app.use(express.json())
app.use('/userapi', userRoute , gameweekRoute)
app.use('/playerapi', playerRoute)

app.listen(process.env.PORT)