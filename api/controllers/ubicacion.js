const Ubicacion = require('../models/ubicacion')


exports.guardar_ubicacion = (req, res, next) => {
    
    const ubicacion = new Ubicacion()
    ubicacion.camion = req.body.camion
    ubicacion.fecha_creacion = new Date()
    ubicacion.latitud= req.body.latitud,
    ubicacion.longitud = req.body.longitud
    ubicacion.save((err, ubicacionGuardada) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Error al guardar los datos del camion',
                error: err
            })
        }
        if (!ubicacionGuardada) {
            res.status.json({
                mensaje: 'No se pudo guardar la informacion de la ubicacion'
            })
        }
        else {
            res.status(200).json({
                mensaje: 'Ubicacion guardadad de manera correcta',
                data: ubicacionGuardada
            })
        }
    })
}
exports.get_ubicaciones_pedido = (req, res, next) => {
    
    const envioId =  req.params.id
    Ubicacion.find({
        envio: envioId
    })
    .exec()
    .then(ubicaciones => {
        res.status(200).json({
            cantidad : ubicaciones.length,
            ubicaciones: ub
        })
    })
    .catch(err => {
        res.status(500).json({
            mensaje: 'Error al cargar el rastreo del envio',
            error: err
        })
    })
}