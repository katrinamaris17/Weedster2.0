import axios from "axios";

export async function getPosts(token) {
  const result = await axios.get("/api/post",  {
    headers: {
      authorization: token,
    },
  });
  return {posts: result.data}
}

export async function setPost(token, category, caption) {
  const result = await axios.post("/api/post", {
    caption, 
    category,
  }, {
    headers: {
      authorization: token
    }
  });
  return {post: result.data}
}

export async function deletePost (token, _id) {
  const result = await axios.delete(`/api/post/${_id}`, {
    headers: {
      authorization: token
    }
  });
  return {result: result.data}
}


export async function setComment (token, postId, message) {
  const result = await axios.post('/api/comment', {
    postId, 
    message,
  }, {
    headers: {
      authorization: token
    }
  }); 
  return {post: result.data}
}

export async function deleteComment(token, postId, commentId) {
  const result = await axios.put(`/api/comment/${postId}/${commentId}`, {
    headers: {
      authorization: token
    }
  });
  return {result: result.data}
}
