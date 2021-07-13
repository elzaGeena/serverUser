
const mongoose = require('mongoose')
const tutorialSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    hours: {
        type: Object,
        required: true
    }
})
module.exports = mongoose.model('Tutorial',tutorialSchema)