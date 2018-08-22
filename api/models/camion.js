const mongoose = require('mongoose')

const CamionSchema = mongoose.Schema({
    placa : {
        type: String,
    },
    chofer: {
        type: String
    }
})

module.exports = mongoose.model('Camion', CamionSchema)