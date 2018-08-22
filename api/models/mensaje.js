const mongoose = require('mongoose')

const MensajeSchema = mongoose.Schema({
    envio: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Envio'
    },
    comentarios : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Mensaje', MensajeSchema)