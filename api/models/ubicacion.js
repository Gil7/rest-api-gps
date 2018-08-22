const mongoose = require('mongoose')

const UbicacionSchema = mongoose.Schema({
    camion: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Camion'
    },
    fecha_creacion: {
        type: Date,
        required: true
    },
    latitud: {
        type: String,
        required: true
    },
    longitud: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Ubicacion', UbicacionSchema)