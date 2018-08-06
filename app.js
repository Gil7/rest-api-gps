const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const users_router = require('./api/routes/users')
//body parser config
app.use(bodyParser.urlencoded({urlencoded : false}))
app.use(bodyParser.json())
//headers configuration

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
app.use('/api/users', users_router)

module.exports = app