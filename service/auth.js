const jwt = require('jsonwebtoken')
const sec = "random@$#123&^"

// this will create tokens
function setUser(user) {
    const payload = {
        ...user 
    }
    return jwt.sign(payload, sec)
}

function getUser(id) {
    return sessionId(id)
}

module.exports = {
    setUser, 
    getUser
}