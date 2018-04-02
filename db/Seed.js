require('dotenv').config()
const mongoose = require('mongoose')
const User = require('./models/UserModel')
const Job = require('./models/JobModel')
const Post = require('./models/PostModel')


  
  mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
  })
  
  mongoose.connection.on('error', (error) => {
    console.error(`
      MongoDB connection error!!! 
      ${error}
    `)
    process.exit(-1)
  })

// COMPANIES

    const Company1 = new User({
      email: "company1@company1.com",
      password: "abcdef",
      isEmployer: true,
      organization : "company1",
      industry : ["finance"],
      firstName : "Jon",
      lastName : "Rubin",
      phoneNumber : "1234567890",
      website : "www.company1.com",
      picture : "https://picsum.photos/200/300/?random",
      streetAddress: "123 Stupid road",
      city : "Atlanta",
      zipCode : "30306",
      causes : ["recycling", "wildlife", "civic"],
      jobs : [],
      posts : []
    })

    const Company2 = new User({
      email: "company2@company2.com",
      password: "abcdef",
      isEmployer: true,
      organization : "company2",
      industry : ["agricolture"],
      firstName : "Sam",
      lastName : "Sam",
      phoneNumber : "1234567890",
      website : "www.company2.com",
      picture : "https://picsum.photos/200/300/?random",
      city : "Atlanta",
      streetAddress: "123 Potato road",
      zipCode : "30306",
      causes : ["food", "recycling"],
      jobs : [],
      posts : []
    })

    const Company3 = new User({
      email: "company3@company3.com",
      password: "abcdef",
      isEmployer: true,
      organization : "company3",
      industry : ["healthcare"],
      firstName : "Marco",
      lastName : "Dell'Olio",
      phoneNumber : "1234567890",
      website : "www.company3.com",
      picture : "https://picsum.photos/200/300/?random",
      city : "Atlanta",
      streetAddress: "123 Smart street",
      zipCode : "30306",
      causes : ["disability, mobility"],
      jobs : [],
      posts : []
    })

    const Company4 = new User({
      email: "company4@company4.com",
      password: "abcdef",
      isEmployer: true,
      organization : "company4",
      industry : ["noprofit"],
      firstName : "Marco",
      lastName : "Dell'Olio",
      phoneNumber : "1234567890",
      website : "www.company4.com",
      picture : "https://picsum.photos/200/300/?random",
      city : "Atlanta",
      streetAddress: "123 Smart street",
      zipCode : "30306",
      causes : ["disability, mobility"],
      jobs : [],
      posts : []
    })

    const job1 = new  Job({
      title: "Money specialist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      department: "finance",
      link : "company link",
      salary : 20000000,
      requirements : "be fun",
      click : 0
    })

    const job2 = new  Job({
      title: "Fun specialist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      department: "fun",
      link : "company link",
      salary : 345000000,
      requirements : "be sad",
      click : 0
    })

    const job3 = new  Job({
      title: "Beans specialist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      department: "production",
      link : "company link",
      salary : 2100,
      requirements : "maybe",
      click : 0
    })

    const job4 = new  Job({
      title: "Beans Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      department: "production",
      link : "company link",
      salary : 22100,
      requirements : "maybe",
      click : 0
    })

    const job5 = new  Job({
      title: "Tester",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      department: "production",
      link : "company link",
      salary : 244500,
      requirements : "maybe",
      click : 0
    })

  const marco = new User({
    email: "marco@marco.com",
    password: "bananaRama",
    isEmployer: false,
    organization : "test",
    industry : ["healthcare", "finance", "retail"],
    firstName : "Marco",
    lastName : "Dell'Olio",
    phoneNumber : "6781212127",
    website : "wwww.marcodellolio.com",
    picture : "https://i.imgur.com/V8Jxe3D.jpg",
    streetAddress: "",
    zipCode : "30306",
    city : "Atlanta",
    causes : ["recycling", "wildlife", "civic"],
    jobs : [],
    posts : []
  })

Company1.jobs = [job1, job3]
Company2.jobs = [job4]
Company3.jobs = [job2, job5]

// Database setup
mongoose.connect(process.env.MONGODB_URI)
.then(() => {return User.remove({})})
.then(() => {return Company1.save();})
.then(() => {return Company2.save();})
.then(() => {return Company3.save();})
.then(() => {return marco.save();})
.then(() => { mongoose.connection.close()})
.then(() => {console.log('db seeded')})
