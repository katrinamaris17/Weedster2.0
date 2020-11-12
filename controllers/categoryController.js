const { insertCategory, insertCommentToDb } = require('../model/weedsterOrm');

const categoryApi = async (req, res) => {
  console.log(req.body);
  const result = await insertCommentToDb(req.body.post.category, "")
  res.json(result);
};


module.exports = {
  categoryApi,
};