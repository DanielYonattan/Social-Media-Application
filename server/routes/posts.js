const router = require("express").Router();
const Post = require("../models/Post");

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

// delete post

// like post

// get post 

// get timeline

module.exports = router