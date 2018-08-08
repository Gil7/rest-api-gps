const jwt = require('jwt-simple')
const moment = require('moment')

exports.verify_auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({
            message: 'headers has not present the token'
        })
    }
    else {
        try {
            const token = req.headers.authorization
            const payload = jwt.decode(token, process.env.JWT_KEY)
            if (payload.exp <= moment().unix()) {
                return res.status(401).json({
                    message: 'Token expired'
                })
            }    
            else {
                req.user = payload
            }
        } catch (error) {
            
            return res.status(500).json({
                message: 'Token is not valid'
            })
        }
        
    }
    
    next()
}