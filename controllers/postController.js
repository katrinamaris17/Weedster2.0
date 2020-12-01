const db = require('../model')
const mongoDb = require('mongodb')

//createPost is working - tested in Postman
const createPost = async (req, res) => {
  // console.log(req.body);
  const {category, caption}=req.body
  // console.log(req.user);
  const result = await db.Post.create({ category, caption, author: req.user._id })
  console.log(result);
  await db.User.findByIdAndUpdate(req.user._id, { $push: { posts: result._id }})
  res.json(result);
};

//getPost is working - tested in Postman
const getPost = async (req, res) => {
  console.log(req.body);
  const { _id } = req.body
  const result = await db.Post.findById({_id})
  res.json(result);
}

// const getAllPosts = async (req, res) => {
//   console.log(req.body);
//   const { _id } = req.body
//   const result = await db.Post.find()
//   res.json(result);
// }

const getComment = async (req, res) => {
  console.log(req.body);
  const { _id } = req.body;
  const result = await Post.comments.findById({_id})
  res.json(result);
}

const createComment = async (req, res) => {
  console.log(req.body);
  const {message, postId}=req.body
  console.log(req.user);
  const options = { returnOriginal: false };
  const commentId = mongoDb.ObjectId()
  console.log(commentId);
  const result = await db.Post.findByIdAndUpdate(postId, { $push: { comments: { _id: commentId, message, owner: req.user._id} } }, options)
  // const result2 = await db.Post.findById(result._id);
  // console.log(result2);
  await db.User.findByIdAndUpdate(req.user._id, { $push: { comments: commentId }});
  res.json(result);
}



// const insertCommentApi = async (req, res) => {
//   console.log(req.body);
//   const {message, postId, userId} = req.body 
//   const result = await insertCommentToDb(message, postId, userId)
//   res.json(result);
// };
// const getCommentsApi = async (req, res) => {
//   console.log ("inside get comments api", req.query);
//   // const postId = req.body.postId
//   const {postId}=req.query 
//   const result = await getCommentsByPostIdFromDb (postId)
//   res.json(result)
// }

// const getPosts = async (req, res) => {
//   const result = await findAllPostsFromDb()
//   res.json(result);
// };

module.exports = {
  createPost,
  getPost,
  // getPosts,
  createComment, 
  // getCommentsApi,
};
