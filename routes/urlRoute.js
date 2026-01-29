const express = require('express')
const route = express.Router() 
const generateURL = require('../controller/generateURL')

route.post('/', generateURL.generateURL)

module.exports = route