// Get all
const getAllPostsQuery = 'SELECT title, caption FROM post;';

// Get one
const getPostByIdQuery = 'SELECT title, caption, id, userId, category FROM post WHERE id = ?;';
const getCommentByIdQuery = 'SELECT * FROM comments WHERE id = ?;';
const getAllPostsByCategoryQuery = 'SELECT title, caption FROM post WHERE category = ?;';

// Get all post of specific user (does not show comments, query post to see post & comments)
const getAllUserPostsQuery = 'SELECT title, caption FROM post INNER JOIN users ON post.userId = ? AND post.userId = users.id;';

// Getting all of the posts and the comments that belong to them
//Does not retrieve post if it has no comments
const getAllPostsAndCommentsQuery = 'SELECT post.title, post.caption, comments.message FROM post INNER JOIN comments ON post.id = comments.postId;';

// Getting one post and all of the comments that belong to it
const getSinglePostandCommentsQuery = 'SELECT post.title, post.caption, comments.message FROM post INNER JOIN comments ON post.id = ? AND post.id = comments.postId;';

// Post for creating (user will need to sign in to create)
const insertPostQuery = 'INSERT INTO post (title, category, caption, userId) values ( ?, ?, ?, ? );';

// Creating a comment for a post by a specific user
const insertCommentQuery = 'INSERT INTO comments (message, postId, userId) VALUES (?, ?, ?);';

// Del for deleting
const deletePostQuery = 'DELETE FROM post WHERE id = ?;';
const deleteCommentQuery = 'DELETE FROM comments WHERE id = ?;';


// Creating a post by a specific user ** line 19
// Creating a comment for a post by a specific user ** line 22

module.exports = {
    insertPostQuery,
    getPostByIdQuery,
    getCommentByIdQuery,
    getAllPostsQuery,
    getAllPostsByCategoryQuery,
    getAllUserPostsQuery,
    getAllPostsAndCommentsQuery,
    getSinglePostandCommentsQuery,
    insertCommentQuery,
    deletePostQuery,
    deleteCommentQuery
}