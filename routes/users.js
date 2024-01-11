const router = require("express").Router();
const User = require("../models/User");

// Register
router.post("/", async (req, res) => {
    const user = await new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    await user.save();
})

module.exports = router;