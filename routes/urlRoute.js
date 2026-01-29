const express = require('express')
const route = express.Router() 
const generate = require('../controller/generateURL')

route.post('/', generate.generateURL)

module.exports = route