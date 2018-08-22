const mongoose = require('mongoose')
const EnvioSchema = mongoose.Schema({
    transportista : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    origen: {
        type: String,
        required: true
    },
    destino : {
        type: String,
        required: true,
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    camion: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Camion'
    },
    fecha_partida: {
        type : Date,
        required: true
    },
    fecha_llegada: {
        type: Date,
        required: true
    }
})
module.exports = mongoose.model('Envio', EnvioSchema)