const router = require("express").Router();
const Post = require("../models/Post");
const User = require('../models/User')

// create post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)

    try {
        const savedPost = await newPost.save();
        res.status(200).json("saved");
    }
    catch(err){ 
        res.status(500).json(err);
    }

})

// update post
router.put("/:id", async (req, res) => {
    try {
        const post = Post.findById(req.params.id)

        if (post.userId == req.body.userId){
            await post.updateOne({$set: req.body})
            res.status(200).json("success")
        }
        else
            res.status(403).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
})

// get post from a user
router.get("/:id", async (req, res) => {
    try {
        const posts = await Post.find({userId: req.params.id}).sort({_id: -1})
        console.log(posts) 
        res.status(200).json(posts)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

// get timeline  
router.get("/feed/:id", async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id})
        
        let posts = await Promise.all( 
            user.following.map((person) => { 
                return Post.find({userId: person})
        }))

        const userPosts = await Post.find({userId: req.params.id}).sort({_id: -1})

        if (posts.length == 0) {
            res.status(200).json(userPosts)
        }
        else { 
            console.log(posts.length)
            console.log(posts.length)
            const flattenedPostLs = posts.flat(1)
            flattenedPostLs.sort( (a, b) => b.createdAt - a.createdAt)
            res.status(200).json(flattenedPostLs)
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router