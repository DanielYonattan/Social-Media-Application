const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts")

dotenv.config();
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL); 

// middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
  
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute)


    
app.listen(3000, () => {
    console.log("server is running");
})       