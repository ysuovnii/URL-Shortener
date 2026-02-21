const express = require('express')
const router = express.Router()

const ctrl = require('../controller/user')

router.get('/signup', ctrl.showSignup)
router.post('/signup', ctrl.handleUser)

module.exports = router 