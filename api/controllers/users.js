const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwtservice = require('../services/jwt')
exports.get_users = (req, res, next) => {
    User.find()
        .select('_id username email name')
        .exec()
        .then(users => {
            res.status(200).json({
                count: users.length,
                users: users.map(user => {
                    return {
                        email: user.email,
                        name: user.name,
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
exports.save_user = (req, res, next) => {
    User.find({
        email: req.body.email
    })
    .exec()
    .then(result => {
        if (result.length > 0) {
            return res.status(409).json({
                message: 'Email already exists.'
            })
        }
        if (req.body.password) {
            bcrypt.hash(req.body.password,10, (err, hash) => {
                if (err) {
                    return res.status(200).json({
                        error: err
                    })
                }
                if (req.body.email != null
                    && req.body.name != null
                    && req.body.username != null) {
                    const user = new User()
                    user.name = req.body.name
                    user.email = req.body.email
                    user.username = req.body.username
                    user.image = 'null'
                    user.role = 'ROLE_USER'
                    user.password = hash
                    user.save((err, userStored) => {
                        if (err) {
                            res.status(500).json({
                                error :err
                            })
                        }
                        if (!userStored) {
                            res.status(401).json({
                                message: 'Error saving user'
                            })
                        }
                        else {
                            res.status(200).json({
                                message: 'User created successfully',
                                user : userStored
                            })
                        }
                    } )
                    
                }
                else {
                    res.status(200).json({
                        message: 'All fields are required'
                    })
                }
            })
        }
        else{
            res.status(200).json({
                error: 'Password is required'
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error : err
        })
    })
}
exports.login_user = (req, res, next) => {
    
    User
    .findOne({email: req.body.email}, (err, user) => {
        if (err) {
            res.status(500).json({
                message: `The emails doesn't exists`,
                error: err
            })
        }
        else {
            
            if (!user) {
                res.status(404).json({
                    message: `This user doesn't exists`,
                })
            }
            else {
                
                bcrypt.compare(req.body.password, user.password, (err, check) => {
                    if (check) {
                        if (req.body.gethash) {
                            token = jwtservice.generate_token(user)
                            res.status(200).json({
                                user,
                                token
                            })
                        }
                        else {
                            res.status(200).json({
                                user
                            })
                        }
                    }
                    else {
                        res.status(404).json({
                            message: 'Login fails',
                        })
                    }
                })
            }
        }
    })
}
exports.update_user = (req, res, next) => {
    const userId = req.params.id
    const newData = req.body
    User.findByIdAndUpdate(userId, newData, (err, userUpdated) => {
        if (err) {
            return res.status(500).json({
                error: err,
                message: 'Error updating the user'
            })
        }
        else {
            if (!userUpdated) {
                res.status(404).json({
                    message: 'User not found'
                })
            }
            else {
                res.status(200).json({
                    user: userUpdated,
                    message: 'User modified correctly'
                })
            }
        }
    })
}