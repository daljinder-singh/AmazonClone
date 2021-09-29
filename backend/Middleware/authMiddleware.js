const jwt = require('jsonwebtoken')

const auth = (req, res, next) =>{
    const token = req.body.headers.Authorization.split(' ')[1]
    if(token === null) return res.sendStatus(401)
    jwt.verify(token, 'amazonlite',(err) =>{
        if(err) return res.sendStatus(403)
        next() 
    }) 
}

module.exports = auth