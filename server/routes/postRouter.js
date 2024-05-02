const express = require("express");
const router = express.Router();

const Post = require("../models/postModel");

/*get all posts*/
router.get("/", async (req, res) => {
    try {
        const data = await Post.find();
        console.log('posts fetched');
        res.status(200).json(data); 

    } catch (error) {
        console.log(error);
        res.status(500).json({error: ' Internal Server Error'});
    }
});

/*get post with id*/
router.get("/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const data = await Post.findById(postId);
        console.log('post fetched');
        res.status(200).json(data); 

    } catch (error) {
        console.log(error);
        res.status(500).json({error: ' Internal Server Error'});
    }
});

/*upload a post*/
router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newPost = new Post(data);

        const response = await newPost.save();
        console.log("user created");
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: ' Internal Server Error'});
    }
});

module.exports = router;