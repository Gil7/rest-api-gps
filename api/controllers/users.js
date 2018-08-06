const User = require('../models/User')

exports.get_users = (req, res, next) => {
    User.find()
        .select('_id username email')
        .exec()
        .then(users => {
            res.status(200).json({
                count: users.length,
                users: users.map(user => {
                    return {
                        email: user.email,
                        username: user.username,
                        _id: user._id,
                        request: {
                            type: 'GET',
                            url: `http://localhost:3000/users/${user._id}`
                        }
                    }
                })
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}