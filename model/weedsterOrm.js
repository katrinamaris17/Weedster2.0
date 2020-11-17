// For the ORM these are the data that should be returned for each ORM
// Getting all of the posts and the comments that belong to them :   Should return an array
// Getting one post and all of the comments that belong to it: Should return  an object
// Getting all the post of a specific user : Should return the all   post of that user
// Creating a post by a specific user: Should return the post that was just created
// Creating a comment for a post by a specific user: Should return the comment that was just created

// !!!!! I think we need to work on this before going forward!!!!!!!!! 

// { post: 'i got my steel an ya know it gets sparked a lot\n' }
//[0] (node:7356) UnhandledPromiseRejectionWarning: Error: Error: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '?, ?, ?)' at line 1        
//[0]     at insertCommentToDb (C:\Users\augie\OneDrive\desktop\bootcamp\project2\Project02\model\weedsterOrm.js:87:11)
//[0]     at processTicksAndRejections (internal/process/task_queues.js:97:5)
//[0] (node:7356) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)

const {
  insertPostQuery,
  getPostByIdQuery,
  getAllPostsQuery,
  getAllPostsByCategoryQuery,
  getAllUserPostsQuery,
  getAllPostsAndCommentsQuery,
  getSinglePostandCommentsQuery,
  getCommentByIdQuery,
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

const insertPost = async (title, category, caption, userId) => {
  try {
    const [result] = await connection.query(insertPostQuery, [
      title, 
      category, 
      caption, 
      userId,
    ]);
    return await findPostByIdFromDb(result.insertId);
  } catch (e) {
    throw new Error(e);
  }
};

const insertCommentToDb = async (message, postId, userId) => {
  try {
    const [result] = await connection.query(insertCommentQuery, [message, postId, userId]);
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
