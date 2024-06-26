const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

/*get all users*/
router.get("/", async (req, res) => {
    try {
        const data = await User.find();
        console.log('users fetched');
        res.status(200).json(data); 

    } catch (error) {
        console.log(error);
        res.status(500).json({error: ' Internal Server Error'});
    }
});

/*get user with id*/
router.get("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const data = await User.findById(userId);
        console.log('user fetched');
        res.status(200).json(data); 

    } catch (error) {
        console.log(error);
        res.status(500).json({error: ' Internal Server Error'});
    }
});

/*post a user*/
router.post("/register", async (req, res) => {
    try {
        const data = req.body;
        const newUser = new User(data);

        const response = await newUser.save();
        console.log("user created");
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: ' Internal Server Error'});
    }
});

module.exports = router;