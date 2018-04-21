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
      organization : "Sierra Club",
      industry : ["finance"],
      firstName : "Jon",
      lastName : "Rubin",
      phoneNumber : "1234567890",
      website : "www.company1.com",
      picture : "https://inhabitat.com/wp-content/blogs.dir/1/files/2018/02/HoKhueArchitectsModernVillageOffice-889x592.jpg",
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
      organization : "Chattahoochee Riverkeeper",
      industry : ["agricolture"],
      firstName : "Sam",
      lastName : "Wilson",
      phoneNumber : "1234567890",
      website : "https://chattahoochee.org/",
      picture : "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
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
      organization : "Trees Atlanta",
      industry : ["healthcare"],
      firstName : "Alex",
      lastName : "Beasley",
      phoneNumber : "1234567890",
      website : "https://treesatlanta.org/",
      picture : "https://treesatlanta.org/wp-content/gallery/who-we-are/i-gr4zv6c-xl.jpg",
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
      organization : "Solarosis",
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

    const Company5 = new User({
      email: "company1@company1.com",
      password: "abcdef",
      isEmployer: true,
      organization : "Chattahoochee Nature Center",
      industry : ["finance"],
      firstName : "Jon",
      lastName : "Rubin",
      phoneNumber : "1234567890",
      website : "www.company1.com",
      picture : "https://inhabitat.com/wp-content/blogs.dir/1/files/2018/02/HoKhueArchitectsModernVillageOffice-889x592.jpg",
      streetAddress: "123 Stupid road",
      city : "Atlanta",
      zipCode : "30306",
      causes : ["recycling", "wildlife", "civic"],
      jobs : [],
      posts : []
    })

    const Company6 = new User({
      email: "company1@company1.com",
      password: "abcdef",
      isEmployer: true,
      organization : "Elachee Nature Science Center",
      industry : ["finance"],
      firstName : "Jon",
      lastName : "Rubin",
      phoneNumber : "1234567890",
      website : "www.company1.com",
      picture : "https://inhabitat.com/wp-content/blogs.dir/1/files/2018/02/HoKhueArchitectsModernVillageOffice-889x592.jpg",
      streetAddress: "123 Stupid road",
      city : "Atlanta",
      zipCode : "30306",
      causes : ["recycling", "wildlife", "civic"],
      jobs : [],
      posts : []
    })

    const Company7 = new User({
      email: "company4@company4.com",
      password: "abcdef",
      isEmployer: true,
      organization : "Save the Whales",
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

    const Company8 = new User({
      email: "company4@company4.com",
      password: "abcdef",
      isEmployer: true,
      organization : "Save the Green Chile",
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

    const Company9 = new User({
      email: "company4@company4.com",
      password: "abcdef",
      isEmployer: true,
      organization : "Green Tea Store",
      industry : ["noprofit"],
      firstName : "Marco",
      lastName : "Dell'Olio",
      phoneNumber : "1234567890",
      website : "www.company4.com",
      picture : "https://www.placecage.com/g/200/300",
      city : "Atlanta",
      streetAddress: "123 Smart street",
      zipCode : "30306",
      causes : ["disability, mobility"],
      jobs : [],
      posts : []
    })

    const Company10 = new User({
      email: "company1@company1.com",
      password: "abcdef",
      isEmployer: true,
      organization : "River Watchers Fund",
      industry : ["finance"],
      firstName : "Jon",
      lastName : "Rubin",
      phoneNumber : "1234567890",
      website : "www.company1.com",
      picture : "https://www.placecage.com/200/300",
      streetAddress: "123 Stupid road",
      city : "Atlanta",
      zipCode : "30306",
      causes : ["recycling", "wildlife", "civic"],
      jobs : [],
      posts : []
    })

    const job1 = new  Job({
      title: "Clean Energy Program Representative",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      department: "finance",
      link : "company link",
      salary : 20000000,
      requirements : "be fun",
      click : 0
    })

    const job2 = new  Job({
      title: "Marketing Intern",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      department: "fun",
      link : "company link",
      salary : 345000000,
      requirements : "be sad",
      click : 0
    })

    const job3 = new  Job({
      title: "Naturalist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      department: "production",
      link : "company link",
      salary : 2100,
      requirements : "maybe",
      click : 0
    })

    const job4 = new  Job({
      title: "Landscape Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      department: "production",
      link : "company link",
      salary : 22100,
      requirements : "maybe",
      click : 0
    })

    const job5 = new  Job({
      title: "Solar Installer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      department: "production",
      link : "company link",
      salary : 244500,
      requirements : "maybe",
      click : 0
    })

    const job6 = new  Job({
      title: "Project Manager",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      department: "production",
      link : "company link",
      salary : 244500,
      requirements : "maybe",
      click : 0
    })

    const job7 = new  Job({
      title: "Urban Forestry Crew Technician",
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
Company2.jobs = [job4, job6, job7]
Company3.jobs = [job2, job5]

// Database setup
mongoose.connect(process.env.MONGODB_URI)
.then(() => {return User.remove({})})
.then(() => {return Company1.save();})
.then(() => {return Company2.save();})
.then(() => {return Company3.save();})
.then(() => {return Company4.save();})
.then(() => {return Company5.save();})
.then(() => {return Company6.save();})
.then(() => {return Company7.save();})
.then(() => {return Company8.save();})
.then(() => {return Company9.save();})
.then(() => {return Company10.save();})
.then(() => {return marco.save();})
.then(() => { mongoose.connection.close()})
.then(() => {console.log('db seeded')})
