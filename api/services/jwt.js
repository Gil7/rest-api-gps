const jwt = require('jwt-simple')
const moment = require('moment')

exports.generate_token = (user) => {
    const payload = {
        sub: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role,
        image: user.image,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()

    }
    return jwt.encode(payload, process.env.JWT_KEY)
}