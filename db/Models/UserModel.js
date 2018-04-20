const mongoose = require('mongoose')
const Schema = require('../Schema')
const UserModel = mongoose.model('User', Schema.UserSchema)

module.exports = UserModel