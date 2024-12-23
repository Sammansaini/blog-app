const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const blog = require("./routes/blog");

//mounts kr lo 
app.use("/app/v1", blog);

const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})

app.get("/", (req, res)=>{
    res.send(`<h1>This is the home page</h1>`)
})