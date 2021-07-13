const mongoose = require('mongoose')

// const studentSchema = new mongoose.Schema({
//     regNo: {
//         type: String
//     },
//     markScoredAssignment: {
//         type: Array
//     },
//     markScoredTest:{
//         type: Array
//     }
// })

const internalSchema = new mongoose.Schema({
    course: {
        type: String,
        required: false
    },
    assignmentMarkOutOf: {
        type: Number,
        required: false
    },
    testMarkOutOf: {
        type: Number,
        required: false
    }, 
    markYOutOf: {
        type: Number,
        required: false
    },
    MarkZOutOf:{
        type: Number,
        required: false
    }, 
    students: {
        type: Array,
        required: false
    }
})
module.exports = mongoose.model('Internal',internalSchema)