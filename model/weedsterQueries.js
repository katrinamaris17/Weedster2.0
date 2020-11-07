// Get all
const getAllPosts = 'SELECT title, caption FROM post;';

// Get one
const getSinglePostById = 'SELECT title, caption FROM post WHERE id = ?;';
const getAllPostsByCategory = 'SELECT title, caption FROM post WHERE category = ?;';

// Get all post of specific user (does not show comments, query post to see post & comments)
const getAllUserPosts = 'SELECT title, caption FROM post INNER JOIN users ON post.userId = ? AND post.userId = users.id;';

// Getting all of the posts and the comments that belong to them
//Does not retrieve post if it has no comments
const getAllPostsAndComments = 'SELECT post.title, post.caption, comments.message FROM post INNER JOIN comments ON post.id = comments.postId;';

// Getting one post and all of the comments that belong to it
const getSinglePostandComments = 'SELECT post.title, post.caption, comments.message FROM post INNER JOIN comments ON post.id = ? AND post.id = comments.postId;';

// Post for creating (user will need to sign in to create)
const insertPost = 'INSERT INTO post (title, category, caption, userId) values ( ?, ?, ?, ? );';

// Creating a comment for a post by a specific user
const insertComment = 'INSERT INTO comments (message, postId, userId) VALUES (?, ?, ?);';

// Del for deleting
const deletePost = 'DELETE FROM post WHERE id = ?;';
const deleteComment = 'DELETE FROM comments WHERE id = ?;';


// Creating a post by a specific user ** line 19
// Creating a comment for a post by a specific user ** line 22