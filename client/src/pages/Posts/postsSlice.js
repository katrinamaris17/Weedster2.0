import {createSlice} from '@reduxjs/toolkit';
import {getPosts} from "../../api/weedsterApi";

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
}

const posts = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        getPostsSuccess(state, action) {
          console.log("action", action)
          state.posts = action.payload.posts
          state.isLoading=false
          state.error=null
        },
        getPostsStart (state, action) {
          state.isLoading=true
        },
        getPostsFailure (state, action) {
          state.isLoading=false
          state.error=action.payload
        },
    },
});

export const {
    getPostsStart,
    getPostsSuccess,
    getPostsFailure,
} = posts.actions;

export default posts.reducer;

export const fetchPosts = (token) => async (dispatch) => {
    try {
      dispatch(getPostsStart())
      const posts = await getPosts(token)
      dispatch(getPostsSuccess(posts))
    } catch (error) {
      dispatch(getPostsFailure(error.toString()))
    } 
}