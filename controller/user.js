const user = require('../model/userSchema')

function showSignup(req, res) {
    return res.render('signup', { error: null })
}

async function handleUser(req, res) {

    const {name, email, password} = req.body

    await user.create({
        name, email, password
    })

    return res.render("index")
}

module.exports = {showSignup, handleUser}