// const express = require('express');
// const router = express.Router();

const Post = require('../models/postmodels')

async function index(req, res) {
    try {
        const posts = await Post.all;
        res.status(200).json(authors);
    } catch (err) {
        res.status(500).send(err);
    }
}








// router.get('/', async (req, res) => {
//     try{
//         const posts = await Post.all
//         res.json(posts)
//     } catch (err) {
//         res.status(500).json({err})
//     }
// })

module.exports = { index };
