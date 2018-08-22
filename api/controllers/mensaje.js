const Mensaje = require('../models/mensaje')

exports.guardar_mensaje = (req, res, next) => {
    if (req.body.mensaje != '') {
        const mensaje = new Mensaje()
        mensaje.envio = req.body.envio
        mensaje.comentarios = req.body.mensaje// mensaje que envia el chofer del camion
        mensaje.camion = req.body.camion // id del camion que lleva el envio
        mensaje.save((err, mensajeGuardado) => {
            if (err) {
                return res.status(500).json({
                    mensaje: 'No se pudo guardar el mensaje',
                    error: err
                })
            }
            if (!mensajeGuardado) {
                res.status.json({
                    mensaje: 'No se pudo guardar el mensaje'
                })
            }
            else {
                res.status(200).json({
                    mensaje: 'Mensaje guardado de manera correcta',
                    data: mensajeGuardado
                })
            }
        })
    }
}
exports.get_mensajes_envio = (req, res, next) => {
    const envioId = req.params.id
    Mensaje.find({envio : envioId})
    .exec()
    .then(mensajes => {
        res.status(200).json({
            cantidad: mensajes.length,
            mensajes
        })
    })
    .catch(err => {
        res.status(500).json({
            mensaje: 'Error al cargar los mensajes del pedido',
            error: err
        })
    })
}