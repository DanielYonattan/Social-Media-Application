const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
 
    userId: {
        type: String,
        required: true
    },
    tweet: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
        default: []
    } 
},     
{timestamps: true}
)

module.exports = mongoose.model("Post", PostSchema);