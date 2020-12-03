const router = require('express').Router();
const authMiddleware = require('./../../middlewares/authorizationMiddleware')
const { createPost, getAllPosts, createComment } = require('../../controllers/postController');

const { feedApi } = require('../../controllers/feedController');

const { categoryApi } = require ('../../controllers/categoryController');

router.post('/category', categoryApi);
router.post('/post', authMiddleware, createPost);
router.get('/post', authMiddleware, getAllPosts);
router.get('/feed', feedApi);
router.post('/comment', authMiddleware, createComment);

// Setup your routes for /api/something here
// This line of code makes it so that /api/fweets is prepended to fweetRoutes
// example route.use('/myRoute', myRoutes);

module.exports = router;
