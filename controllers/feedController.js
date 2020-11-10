const { findAllPostsFromDb } = require('../model/weedsterOrm');

const feedApi = async (req, res) => {
  console.log(req.body);
  const result = await findAllPostsFromDb (req.body.post, "")
  res.json(result);
};

module.exports = {
  feedApi,
};
