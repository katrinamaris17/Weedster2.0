const router = require('express').Router();
const { postApi, getPosts, insertCommentApi } = require('../../controllers/postController');

const { feedApi } = require('../../controllers/feedController');

const { categoryApi } = require ('../../controllers/categoryController');

router.post('/category', categoryApi);
router.post('/post', postApi);
router.get('/post', getPosts);
router.get('/feed', feedApi);
router.post('/comment', insertCommentApi);
// Setup your routes for /api/something here
// This line of code makes it so that /api/fweets is prepended to fweetRoutes
// example route.use('/myRoute', myRoutes);

module.exports = router;
