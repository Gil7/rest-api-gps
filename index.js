const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.port || 3000
mongoose.connect('mongodb://localhost:27017/mean_stack', (err, res) => {
    if (err) {
        throw err
    }
    else {
        console.log('Db running correctly :)')
        app.listen(port, () => {
            console.log(`Server listening at http://localhost:${port}`)
        })
    }
} 
)