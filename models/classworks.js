
const mongoose = require('mongoose')
const classworkSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    type: {
        type: Object,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    day:{
        type: String,
        required: true
    },
    hour:{
        type: String,
        required: false
    },
    noOfStudents:{
        type: String,
        required: true
    },
    instructionMode:{
        type: String,
        required: true
    },
    topics:{
        type: String,
        required: true
    },
    remarks:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Classwork', classworkSchema)