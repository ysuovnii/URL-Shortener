const urlSchema = require('../model/urlSchema')
const {nanoid} = require('nanoid')

async function generateURL(req, res) {
    try {

        url = req.body.url 
        if(!url) {
            return res.status(400).json({"error" : "URL is required"})
        }
        
        id = nanoid(8)
        
        await urlSchema.create({
            shortID : id,
            redirectURL : url, 
        })
        
        return res.json({
            "shortID" : id,
            "RedirectURL" : url,
        })
    }
    catch(err) {
        console.log("error: ", err)
        return res.status(500).json({"error" : "Something went wrong"})
    }
}

module.exports = {generateURL}