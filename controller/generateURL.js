const urlSchema = require('../model/urlSchema')
const {nanoid} = require('nanoid')

async function generateURL(req, res) {
    url = req.body.url 
    if(!url) {
        return res.status(400).json({"error" : "URL is required"})
    }

    shortID = nanoid(8)

    await urlSchema.create({
        shortID : shortid,
        redirectURL : url, 
    })

    return res.json({"shortID" : shortID})
}

module.exports = {generateURL}