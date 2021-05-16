const router = require('express').Router();
const { User, Post } = require('../models/');

router.get('/login', (req, res) => {
    res.render('login');
    return
})

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findall({
            include: [User],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('posts', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;