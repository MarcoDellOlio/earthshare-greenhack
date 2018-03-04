const express = require('express')
const User = require('../db/models/UserModel')

const router = express.Router()

router.get('/companies', async (request, response) => {

    try {
        const users = await User.find({})
        const companies = users.map((user) => {
            if (user.isEmployer) {
                return user
            }
        })
        response.json(companies)
    }
    catch (err) {
        console.log(err)
    }
})

router.get('/companies/:companyId', async (request, response) => {
    try {
        const company = await User.findById(request.params.companyId)
        response.json(company)
    }
    catch (err) {
        console.log(err)
    }
})

router.get('/companies/jobs', async (request, response) => {

    try {
        const users = await User.find({})
        const companies = users.map((user) => {
            if (user.isEmployer) {
                return user
            }
        })
        response.json(companies)
    }
    catch (err) {
        console.log(err)
    }
})

router.get('/users', async (request, response) => {

    try {
        const users = await User.find({})
        const jobseekers = users.map((user) => {
            if (!(user.isEmployer)) {
                return user
            }
        })
        response.json(jobseekers)
    }
    catch (err) {
        console.log(err)
    }
})

router.get('users/:userId', async (request, response) => {
    try {
        const user = await User.findById(request.params.id)
        response.json(user)
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/', async (request, response) => {
    try {
        const newUserInfo = await request.body
        const newUser = await User.create(newUserInfo)
        await newUser.save()
        response.json(newUser)
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/authenticate', async (request, response) => {
    try{
        const email = await request.body.email
        const password = await request.body.password
        const user = await User.findOne({"email": email})
        if (!user) {
            response.json({"response": "User not found"})
        }
        else {
            if (user.password === password) {
                response.json(user)
            }
            else {
                response.json({"response": "Password is incorrect"})
            }
        }
        response.json(user)
    }
    catch(err) {
        console.log(err)
    }
})

router.delete('/:userId', async (request, response) => {
    try {
        await User.findByIdAndRemove(request.params.userId)
        response.json(user)
    }
    catch (err) {
        console.log(err)
    }
})

router.patch('/:userId', async (request, response) => {
    try {
        const updatedUserInfo = await User.findByIdAndUpdate(request.params.userId, request.body, {new: true})
        response.json(updatedUserInfo)
    }
    catch (err) {
        console.log(err)
        response.sendStatus(500) 
    }
})

module.exports = router
