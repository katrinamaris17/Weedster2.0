import {createSlice} from '@reduxjs/toolkit';
import {getPosts, setPost, setComment} from "../../api/weedsterApi";

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
    isSaving: false,
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
        setPostUI (state, action) {
            state.posts.push(action.payload)
        },
        setPostStart (state, action) {
            state.isSaving=true
        },
        setPostFailure (state, action) {
            state.isSaving=false
            state.error=action.payload
        },
        setPostSuccess(state, action) {
            // state.posts.push(action.payload.post) 
            const array = state.posts.map(post => {
                if (post._id === "fakeID"){
                    return action.payload.post
                } else {
                    return post
                }
            })
            state.posts=array
            state.isSaving=false
            state.error=null
        },
        setCommentStart (state, action) {
            state.isSaving=true
        }, 
        setCommentFailure (state, action) {
            state.isSaving=false
            state.error=action.payload
        },
        setCommentSuccess(state, action) {
            // console.log(action)
            const array = state.posts.map(post => {
                if (post._id === action.payload.post._id){
                    return action.payload.post
                } else {
                    return post
                }
            })
            state.posts=array
            state.isSaving=false
            state.error=null
        },
    },
});

export const {
    getPostsStart,
    getPostsSuccess,
    getPostsFailure,
    setPostUI,
    setPostStart,
    setPostFailure,
    setPostSuccess,
    setCommentStart,
    setCommentFailure,
    setCommentSuccess,
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

export const savePost = (token, category, caption) => async (dispatch) => {
    try {
        dispatch(setPostStart())
        const post = await setPost(token, category, caption)
        dispatch(setPostSuccess(post))
        // const posts = await getPosts(token)
        // dispatch(getPostsSuccess(posts))
    } catch (error) {
        dispatch(setPostFailure(error.toString()))
    }
}


export const saveComment = (token, postId, message) => async (dispatch) => {
    try {
        dispatch(setCommentStart())
        const comment = await setComment(token, postId, message)
        dispatch(setCommentSuccess(comment))
        // const posts = await getPosts(token)
        // dispatch(getPostsSuccess(posts))
    } catch (error) {
        dispatch(setCommentFailure(error.toString()))
    }
}