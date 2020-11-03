const queryPostsByCategory = 'SELECT title, message FROM posts WHERE category = ?;';
const queryMyPosts = 'SELECT title, message FROM post INNER JOIN users ON post.userId = users.id;';
const deletePost = 'DELETE FROM post WHERE id = ?;';
const deleteComment = 'DELETE FROM comments WHERE id = ?;';
const queryPostAndComments = 'SELECT message FROM comments INNER JOIN post ON comments.postId = post.id;';


// Get all
// Get one
// Post for creating
// Del for deleting
// Getting all of the posts and the comments that belong to them ** << line 5
// Getting one post and all of the comments that belong to it
// Getting all the post of a specific user
// Creating a post by a specific user
// Creating a comment for a post by a specific user

// For the ORM these are the data that should be returned for each ORM
// Getting all of the posts and the comments that belong to them :   Should return an array
// Getting one post and all of the comments that belong to it: Should return  an object
// Getting all the post of a specific user : Should return the all   post of that user
// Creating a post by a specific user: Should return the post that was just created
// Creating a comment for a post by a specific user: Should return the comment that was just created