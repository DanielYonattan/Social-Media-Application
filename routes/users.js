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

// follow

// unfolloe

module.exports = router;