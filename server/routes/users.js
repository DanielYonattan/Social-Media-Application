const router = require("express").Router();
const User = require("../models/User");

// update bio
router.put("/update/:id", async (req, res) => {
    if (req.body.userId != req.params.id)
        res.status(403).json("cannot update an account you don't own");
    
    try{ 
        const user = await User.findOne({
            _id: req.params.id
        });

        if (req.body.bio)
            user.bio = req.body.bio;

        await user.save();

        res.status(200).json(req.body.bio);
    }  
    catch(err){ 
        res.status(500).json(err);
    }
}) 
  
// delete
router.delete("/delete/:id", async (req, res) => {
    if (req.body.userId != req.params.id)
        res.status(403).json("cannot modify accout you do not own");

    try {
        user = await User.deleteOne({
            _id: req.body.userId
        })

        res.status(200).json(user);
    }
    catch(err){ 
        res.status(500).json(err);
    }
})

// get
router.get("/get/:id", async (req, res) => {
    try {
        user = await User.findOne({
            _id: req.params.id
        })
        const {password, updatedAt, ...other} = user._doc;

        res.status(200).json(other);
    }
    catch(err){ 
        res.status(500).json(err);
    }
})

// get by username
router.get("/get/byusername/:username", async (req, res) => {
    try {
        user = await User.findOne({
            username: req.params.username
        })

        res.status(200).json(user._id);
    }
    catch(err){ 
        res.status(500).json("False");
    }
})

// follow
router.put("/follow/:id", async (req, res) => {
    try{ 
        const user = await User.findOne({
            _id: req.params.id
        });
        const toFollow = await User.findOne({
            _id: req.body.followId
        })

        if (!user.following.includes(req.body.followId)){
            user.following.push(req.body.followId);
            toFollow.followers.push(req.body.userId);
            await user.save();
            await toFollow.save()
        }
        else {
            console.log("already following")
        }

    } 
    catch(err){ 
        res.status(500).json(err); 
    }

    res.status(200).json(); 

}) 

// unfollow
router.put("/unfollow/:id", async (req, res) => {
    if (req.body.userId != req.params.id || req.body.userId == req.body.unfollowId)
        res.status(403).json("cannot update an account you don't own");

    try{ 
        const user = await User.findOne({
            _id: req.params.id
        });
        const tounFollow = await User.findOne({
            _id: req.body.unfollowId
        })

        if (user.following.includes(req.body.unfollowId)){
            await user.updateOne({$pull: {following: req.body.unfollowId}})
            await tounFollow.updateOne({$pull: {followers: req.body.userId}})
        }
        else
            res.status(403).json("cannot unfollow user you do not folloe")

        await user.save();

        res.status(200).json(user.following);
    } 
    catch(err){ 
        res.status(500).json(err);
    }
}) 


// get list of users the account is not currently following
router.get("/notfollowing/:id", async (req, res) => {
    try {
        const notfollowing = await User.find({"followers": {"$ne": req.params.id}, "_id": {"$ne": req.params.id}})
        res.status(200).json(notfollowing)

    }
    catch (err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;