const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {type: String, required: true},
    description : {type: String},
    like: {type: Number, required: true},
    picture : { type: String, required: true},
  },
  {
    timestamps: {},
  }
)

const JobSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true},
    department: {type: String, required: true},
    link : {type: String, required: true},
    salary: {type: Number},
    requirements : {type: String, required: true},
    click : {type: Number}
  },
  {
    timestamps: {},
  }
)

const UserSchema = new Schema(
  {
    email: { type: String, required: true},
    password: { type: String, required: true},
    isEmployer: {type: Boolean},
    organization : { type: String, required: true},
    industry : [],
    firstName : { type: String, required: true},
    lastName : { type: String, required: true},
    phoneNumber : { type: String, required: true},
    website : { type: String, required: true},
    picture : { type: String, required: true},
    city : { type: String, required: true},
    streetAddress: {type: String},
    zipCode : {type: String},
    linkedin : {type: String},
    causes : [],
    jobs : [JobSchema],
    posts : [PostSchema]
  },
  {
      timestamps: {},
      usePushEach: true
  }
);


module.exports = {
  UserSchema,
  JobSchema,
  PostSchema
}