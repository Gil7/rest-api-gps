const Envio = require('../models/envio')
exports.get_envios = (req, res, next) => {
    Envio.find()
    .exec()
    .then(envios => {
        res.status.json({
            cantidad: envios.length,
            envios
        })
    })
    .catch(err => {
        res.status(500).json({
            mensaje: 'No se han podido cargar los envios',
            error: err
        })
    })
}
exports.guardar_envio = (req, res, next) => {
    console.log(req.body)
    const envio = new Envio()
    envio.transportista = req.body.transportista
    envio.origen = req.body.origen,
    envio.destino =  req.body.destino
    envio.cliente = req.body.cliente,
    envio.camion = req.body.camion
    envio.fecha_partida = req.body.fecha_partida
    envio.fecha_llegada = req.body.fecha_llegada
    envio.save((err, envioGuardado) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'No se pudo guardar el envio',
                error: err
            })
        }
        if (!envioGuardado) {
            res.status(500).json({
                mesaje: 'No se pudo guardar el envio',

            })
        }
        else {
            res.status(200).json({
                mensaje: 'envio guardado de manera correcta',
                envio : envioGuardado
            })
        }
    })
}