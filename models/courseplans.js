const mongoose = require('mongoose')
const courseplanSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    }, 
    topics: {
        type: String,
        required: true
    },
    module: {
        type: String,
        required: true
    }, 
})

module.exports = mongoose.model('Courseplan',courseplanSchema)