const mongoose = require('mongoose')
const Schema = require('../Schema')
const Job = mongoose.model('Job', Schema.JobSchema)

module.exports = Job

// n