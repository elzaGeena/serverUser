
const mongoose = require('mongoose')
const assignmentSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    announcementDate: {
        type: String,
        required: true
    },
    submissionDate: {
        type: String,
        required: true
    },
    submissionTime: {
        type: String,
        required: true
    },
    assignmentStatement: {
        type: Array,
        required: true
    },
    courseOutcome:{
        type: String
    },
    rbtl:{
        type: String
    },
    pi:{
        type: String
    }
})
module.exports = mongoose.model('Assignment', assignmentSchema)
