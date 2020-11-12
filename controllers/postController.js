const { insertPost, insertCommentToDb, findAllPostsFromDb } = require('../model/weedsterOrm');

const postApi = async (req, res) => {
  console.log(req.body);
  const {title, category, caption, userId}=req.body
  const result = await insertPost(title, category, caption, userId)
  res.json(result);
};
const commentApi = async (req, res) => {
  console.log(req.body);
  const result = await insertCommentToDb(req.body.comments, "")
  res.json(result);
};
const getPosts = async (req, res) => {
  const result = await findAllPostsFromDb()
  res.json(result);
};

module.exports = {
  postApi,
  commentApi,
  getPosts,
};
