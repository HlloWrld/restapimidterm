const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    courseNumber: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    }
})

const Course = mongoose.model('course', courseSchema);

module.exports = Course;