import axios from "axios";

export async function getPosts(token) {
  const result = await axios.get("/api/post",  {
    headers: {
      authorization: token,
    },
  });
  return result.data
}
