const express = require('express')
const router = express.Router()

const ctrl = require('../controller/user')

router.get('/signup', ctrl.showSignup)
router.post('/signup', ctrl.handleSignup)
router.get('/login', ctrl.showLogin)
router.post('/login', ctrl.handleLogin)

module.exports = router 