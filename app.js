const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const users_router = require('./api/routes/users')
const camion_router = require('./api/routes/camion')
const mensaje_router =  require('./api/routes/mensaje')
const envio_router = require('./api/routes/envio')
const ubicacion_router = require('./api/routes/ubicacion')

//body parser config
app.use(bodyParser.urlencoded({urlencoded : false}))
app.use(bodyParser.json())

app.use('/uploads/users', express.static('uploads/users'))

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
app.use('/api/camiones', camion_router)
app.use('/api/mensajes', mensaje_router)
app.use('/api/ubicaciones', ubicacion_router)
app.use('/api/envios', envio_router)

module.exports = app