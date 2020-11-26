const { Post } = require('../model')

const createPost = async (req, res) => {
  console.log(req.body);
  const {category, caption}=req.body
  console.log(req.user);
  const result = await Post.create({ category, caption, author: req.user._id })
  res.json(result);
};
const insertCommentApi = async (req, res) => {
  console.log(req.body);
  const {message, postId, userId} = req.body 
  const result = await insertCommentToDb(message, postId, userId)
  res.json(result);
};
const getCommentsApi = async (req, res) => {
  console.log ("inside get comments api", req.query);
  // const postId = req.body.postId
  const {postId}=req.query 
  const result = await getCommentsByPostIdFromDb (postId)
  res.json(result)
}

const getPosts = async (req, res) => {
  const result = await findAllPostsFromDb()
  res.json(result);
};

module.exports = {
  createPost,
  getPosts,
  insertCommentApi, 
  getCommentsApi,
};
