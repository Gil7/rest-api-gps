const mongoose = require('mongoose')

const ArtistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    }
})

module.exports = mongoose.model('Artist', ArtistSchema)