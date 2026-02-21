const express = require('express')
const router = express.Router()

const ctrl = require('../controller/user')

router.post('/signup', ctrl.showSignup)
router.post('/', ctrl.handleUser)

module.exports = router 