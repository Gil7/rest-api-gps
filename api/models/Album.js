const mongoose = require('mongoose')
const AlbumSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    year:{
        type: Number
    },
    image: {
        type: String
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    }
})
module.exports = mongoose.model('Album', AlbumSchema)