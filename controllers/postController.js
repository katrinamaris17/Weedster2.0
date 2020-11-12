const { insertPost, insertCommentToDb } = require('../model/weedsterOrm');

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

module.exports = {
  postApi,
  commentApi,
};
