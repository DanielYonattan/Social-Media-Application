const router = require("express").Router();
const Post = require("../models/Post");

// create post
router.post("/", async (req, res) => {
    console.log("req body: " + req.body)
    const newPost = new Post(req.body)

    try {
        const savedPost = await newPost.save();
        res.status(200).json("saved");
    }
    catch(err){ 
        res.status(500).json(err);
        console.log(req.body)
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

// get post from a user

router.get("/:username", async (req, res) => {
    try {
        const post = await Post.find({userId: req.params.username}).sort({_id: -1})
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
})

// get timeline

module.exports = router