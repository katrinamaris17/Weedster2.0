// For the ORM these are the data that should be returned for each ORM
// Getting all of the posts and the comments that belong to them :   Should return an array
// Getting one post and all of the comments that belong to it: Should return  an object
// Getting all the post of a specific user : Should return the all   post of that user
// Creating a post by a specific user: Should return the post that was just created
// Creating a comment for a post by a specific user: Should return the comment that was just created

const {
    getAllPosts,
    getSinglePost,
    getAllPostsByCategory,
    getAllUserPosts,
    getAllPostsAndComments,
  } = require('./weedsterQueries');
  const connection = require('../config/connection');

  const findAllPostsFromDb = async () => {
      try {
          const [ result ] = await connection.query(getAllPosts)
          return result;
      } catch (e) {
          throw new Error(e);
      }
  };


  module.exports = {
    findAllPostsFromDb,
  };