//express
const express = require('express')
const server = express() 

//env variables
require('dotenv').config()
const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

//parsing
server.use(express.json());        
server.use(express.urlencoded({ extended: true })); 

//db
const dbConnection = require('./controller/connection')
dbConnection.connectDB(MONGO_URL)

//routes
const urlRoute = require('./routes/urlRoute')
server.use('/url', urlRoute)

//entry 
server.listen(PORT, () => {
    console.log(`Server is starting at PORT : ${PORT}`)
})