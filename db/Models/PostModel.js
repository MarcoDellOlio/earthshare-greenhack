const mongoose = require('mongoose')
const Schema = require('../Schema')
const Post = mongoose.model('Post', Schema.PostSchema)

module.exports = Post