// For the ORM these are the data that should be returned for each ORM
// Getting all of the posts and the comments that belong to them :   Should return an array
// Getting one post and all of the comments that belong to it: Should return  an object
// Getting all the post of a specific user : Should return the all   post of that user
// Creating a post by a specific user: Should return the post that was just created
// Creating a comment for a post by a specific user: Should return the comment that was just created

const {
  insertPostQuery,
  getPostByIdQuery,
  getAllPostsQuery,
  getAllPostsByCategoryQuery,
  getAllUserPostsQuery,
  getAllPostsAndCommentsQuery,
  getSinglePostandCommentsQuery,
  insertCommentQuery,
  deletePostQuery,
  deleteCommentQuery,
} = require("./weedsterQueries");

const connection = require("../config/connection");

const findAllPostsFromDb = async () => {
  try {
    const [result] = await connection.query(getAllPostsQuery);
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

const findCommentByIdFromDb = async (commentId) => {
  try {
    const [ result ] = await connection.query(getCommentByIdQuery, commentId);
    return result[0];
  } catch (e) {
    throw new Error(e);
  }
}

const getAllPostsByCategory = async (category) => {
  try {
    const [result] = await connection.query(getAllPostsByCategoryQuery);
    return result[0];
  } catch (e) {
    throw new Error(e);
  }
};

const getAllUserPosts = async (userId) => {
  try {
    const [result] = await connection.query(getAllUserPostsQuery, userId);
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

const getAllPostsAndComments = async (userId) => {
  try {
    const [result] = await connection.query(getAllPostsAndCommentsQuery, userId);
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

const insertPost = async (post, userId) => {
  try {
    const [result] = await connection.query(insertPostQuery, [
      "title1",
      "edibles",
      post,
      1,
    ]);
    return await findPostByIdFromDb(result.insertId);
  } catch (e) {
    throw new Error(e);
  }
};

const insertCommentToDb = async (message, postId, userId) => {
  try {
    const [result] = await connection.query(insertCommentQuery, message, postId, userId);
    return await findCommentByIdFromDb(result.insertId);
  } catch (e) {
    throw new Error(e);
  }
};

const findPostByIdFromDb = async (postId) => {
  try {
    const [result] = await connection.query(getPostByIdQuery, postId);
    return result[0];
  } catch (e) {
    throw new Error(e);
  }
};

const deleteComment = async (Comment, userId) => {
  try {
    const [result] = await connection.query(deleteCommentQuery, [Comment, userId]);
    return await findCommentByIdFromDb(result.deleteId);
  } catch (e) {
    throw new Error(e);
  }
};

const deletePost = async (Post, userId) => {
  try {
    const [result] = await connection.query(deletePostQuery, [Post, userId]);
    return await findPostByIdFromDb(result.deleteId);
  } catch (e) {
    throw new Error(e);
  }
};
module.exports = {
  findAllPostsFromDb,
  findCommentByIdFromDb,
  getAllPostsByCategory,
  getAllUserPosts,
  getAllPostsAndComments,
  insertPost,
  insertCommentToDb,
  findPostByIdFromDb,
  deleteComment,
  deletePost,
};
