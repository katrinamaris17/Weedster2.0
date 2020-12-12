const db = require('../model')
const mongoDb = require('mongodb')

const createPost = async (req, res) => {
  const {category, caption}=req.body
  const result = await db.Post.create({ category, caption, author: req.user._id })
  await db.User.findByIdAndUpdate(req.user._id, { $push: { posts: result._id }})
  const postResult = await db.Post.findById(result._id).populate('author', 'username')
  res.json(postResult);
};

const removePost = async (req, res) => {
  const { post_id }=req.params
  const result = await db.Post.deleteOne({ _id: post_id })
  // await db.User.findByIdAndUpdate(req.user._id, { $push: { posts: result._id }})
  // const postResult = await db.Post.findById(result._id).populate('author', 'username')
  // res.json(postResult);
  res.json(result)
};

// const getPost = async (req, res) => {
//   console.log(req.body);
//   const { _id } = req.body
//   const result = await db.Post.findById({_id})
//   res.json(result);
// }

const getAllPosts = async (req, res) => {
  console.log(req.body);
  const { _id } = req.body
  // const result = await db.Post.find({}, {'comments': {$elemMatch: {isDeleted: false}}}).populate('author', 'username').populate({
  const result = await db.Post.find({}).populate('author', 'username').populate({

    path: 'comments',
    populate: { path: 'owner', select:'username' }
  });
  res.json(result);
}


// const getComment = async (req, res) => {
//   console.log(req.body);
//   const { _id } = req.body;
//   const result = await Post.comments.findById({_id})
//   res.json(result);
// }

const createComment = async (req, res) => {
  console.log(req.body);
  const {message, postId}=req.body
  console.log(req.user);
  const options = { returnOriginal: false };
  const commentId = mongoDb.ObjectId()
  console.log(commentId);
  const result = await db.Post.findByIdAndUpdate(postId, { $push: { comments: { _id: commentId, message, owner: req.user._id} } }, options)
  const post = await db.Post.findById(postId).populate('author', 'username').populate({
    path: 'comments',
    populate: { path: 'owner', select:'username' }
  });
  res.json(post);
}

// Search Bing for "mongodb update embedded array document":
// db.Departments.update(
//   { "_id" : ObjectId("4eb79ee1e60fc603788e7259"),
//     "Subsidiaries._id" : ObjectId("4eb79eeae60fc603788e7271") },
//   { "$set" : { "Subsidiaries.$.Location" : "City" } }
// )

const hideComment = async (req, res) => {
  const { post_id, comment_id}=req.params
  const result = await db.Post.update({ "_id" : mongoDb.ObjectId(post_id),
      "comments._id" : mongoDb.ObjectId(comment_id) }, { "$set" : { "comments.$.isDeleted" : true } })
  res.json(result)
}

module.exports = {
  createPost,
  removePost,
  getAllPosts,
  createComment,
  hideComment,
};
