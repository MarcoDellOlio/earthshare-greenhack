const express = require('express')
const Post = require('../db/Models/PostModel')
const User = require('../db/Models/UserModel')
const router = express.Router({ mergeParams: true })

router.get('/', (request, response) => {
    const userId = request.params.userId
    User.findById(userId)
        .then((user) => {
            response.json(user)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.post('/', async (request, response) => {
    try {
        const user = await User.findById(request.params.userId)
        const newPost = await Post.create(request.body)
        user.posts.push(newPost)
        await user.save()
        response.json(user)
    }
    catch (err) {
        console.log(err)
    }
})

router.delete('/:postId', async (request, response) => {
    console.log("Deleting post:", request.params.postId)
    try {
        const user = await User.findById(request.params.userId)
        const post = user.posts.id(request.params.postId).remove()
        await user.save()
        console.log("Saved user after removing post")
        response.json(post)
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router