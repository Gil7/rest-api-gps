const Camion = require('../models/camion')

exports.get_camiones = (req, res, next) => {
    console.log(req.user)
    Camion.find().exec()
    .then(camiones => {
        res.status(200).json({
            cantidad: camiones.length,
            camiones
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err,
            mensaje: 'Error al cargar camiones'
        })
    })
}
exports.guardar_camion = (req, res, next) => {
    const camion = new Camion()
    camion.placa = req.body.placa
    camion.chofer = req.body.chofer
    camion.save((err, camionGuardado) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al guardar los datos del camion',
                error: err
            })
        }
        if (!camionGuardado) {
            res.status.json({
                mensaje: 'No se puedo guardar la informacion del camion'
            })
        }
        else {
            res.status(200).json({
                mensaje: 'Datos del camion guardados de manera correcta',
                data: camionGuardado
            })
        }
    })
}