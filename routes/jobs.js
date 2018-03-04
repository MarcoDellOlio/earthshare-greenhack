const express = require('express')
const Job = require('../db/Models/JobModel')
const User = require('../db/Models/UserModel')
const router = express.Router({ mergeParams: true })

router.get('/', async (request, response) => {

    try {
        const users = await User.find({})
        response.json(users)
    }
    catch (err) {
        console.log(err)
    }
})

// router.post('/', async (request, response) => {
//     try {
//         const user = await User.findById(request.params.userId)
//         const newJob = await Job.create(request.body)
//         user.jobs.push(newJob)
//         await user.save()
//         response.json(user)
//     }
//     catch (err) {
//         console.log(err)
//     }
// })

// router.delete('/:jobId', async (request, response) => {
//     console.log("Deleting job:", request.params.jobId)
//     try {
//         const user = await User.findById(request.params.userId)
//         const job = user.jobs.id(request.params.jobId).remove()
//         await user.save()
//         console.log("Saved user after removing job")
//         response.json(job)
//     }
//     catch (err) {
//         console.log(err)
//     }
// })

module.exports = router