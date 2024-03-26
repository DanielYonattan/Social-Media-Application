const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts")
const cors = require("cors")

dotenv.config();
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL); 

const corsOptions = {
    origin: "*", 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
 }

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors(corsOptions))
app.disable('etag')
  
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute)

app.get("/", () => {console.log("hello")})


    
app.listen(3000, () => {
    console.log("server is running");
})       