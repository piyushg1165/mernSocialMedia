const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;
// const mongoUrl = MONGO_URL;
const mongoUrl = "mongodb+srv://anshg1165:3uNT4bMdBTdERcrZ@root.1sofuak.mongodb.net/";

mongoose.connect(mongoUrl, {})
const db = mongoose.connection;

db.on("connected", () => {
    console.log("db connected");
});

db.on("disconnected", () => {
    console.log("db disconnected");
});

db.on('error', (err) => {
    console.log("error => ",err)
});

module.exports = db;