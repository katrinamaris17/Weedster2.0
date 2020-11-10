const router = require('express').Router();
const { postApi } = require('../../controllers/postController');

router.post('/post', postApi);

// Setup your routes for /api/something here
// This line of code makes it so that /api/fweets is prepended to fweetRoutes
// example route.use('/myRoute', myRoutes);

module.exports = router;
