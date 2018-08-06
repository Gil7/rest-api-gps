const mongoose = require('mongoose')
const SongSchema = mongoose.Schema({
    number: {
        type: String
    },
    name: {
        type: String
    },
    duration: {
        type: String
    },
    file: {
        type: String
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    }
})
module.exports = mongoose.model('Song', SongSchema)