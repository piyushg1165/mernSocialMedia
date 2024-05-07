const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send('hello there');
});

const userRouter = require('./routes/userRouter');
app.use("/users",userRouter);

const postRouter = require('./routes/postRouter');
app.use("/posts",postRouter);


app.listen(3000, function() {
    console.log("Server is running on port 3000");
});