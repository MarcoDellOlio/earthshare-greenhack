const mongoose = require('mongoose')
const Schema = require('../schema')
const Job = mongoose.model('Job', Schema.JobSchema)

module.exports = Job