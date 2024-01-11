const router = require("express").Router();
const User = require("../models/User");

// update bio
router.put("/:id", async (req, res) => {
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

// get

// follow

// unfolloe

module.exports = router;