const router = require("express").Router();
const User = require("../models/User");


// Register
router.post("/register", async (req, res) => {
    try { 
        const user = await new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        await user.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
})

// login
router.post("/login", async (req,res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        });

        if (user == null)
            res.status(404).json("user not found");
        else
            res.status(200).json(user._id);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;

   