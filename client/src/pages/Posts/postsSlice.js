import {createSlice} from '@reduxjs/toolkit';
import {getPosts as getPostsApi} from "../../api/weedsterApi";

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
}

const posts = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        getPosts(state, action) {
            return {
                ...state,
                posts: ["test"],
            };
        },
    },
});

export const {
    getPosts,
} = posts.actions;

export default posts.reducer;
export const fetchPosts = (token) => { 
  console.log("inside fetch post")
  return async (dispatch) => {
    console.log("token from slice", token)
    
    try {
      const posts = await getPostsApi (token)
      dispatch (getPosts(posts))
    } catch (error) {
      console.log("error", error)
    } 
  }
}