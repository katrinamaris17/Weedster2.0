import {createSlice} from '@reduxjs/toolkit';
import {getPosts, setPost, deletePost, setComment, deleteComment, setPostImage} from "../../api/weedsterApi";

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
        getPostsStart(state, action) {
          state.isLoading=true
        },
        getPostsFailure(state, action) {
          state.isLoading=false
          state.error=action.payload
        },
        setPostUI(state, action) {
            state.posts.push(action.payload)
        },
        setPostStart(state, action) {
            state.isSaving=true
        },
        setPostFailure(state, action) {
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
        deletePostUI(state, action) {
            console.log('this is the delete action ', action)
            const array = state.posts.filter(post => {
                if (post._id === action.payload.post_id){
                    return false
                } else {
                    return true
                }
            })
            state.posts=array
        },
        setCommentStart(state, action) {
            state.isSaving=true
        }, 
        setCommentFailure(state, action) {
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
        deleteCommentUI(state, action) {
            const array = state.posts.map(post => {
                if (post._id === action.payload.post_id){
                    return {
                        ...post,
                        comments: post.comments.filter((comment) => {
                            if (comment._id === action.payload.comment_id) {
                                return false
                            } else {
                                return true
                            }
                        })
                    }
                } else {
                    return post
                }
            })
            console.log('this is the delete comment action ', action, array)
            state.posts=array
        }
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
    deletePostUI,
    setCommentStart,
    setCommentFailure,
    setCommentSuccess,
    deleteCommentUI,
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

export const savePost = (token, category, caption, file) => async (dispatch) => {
    try {
        dispatch(setPostStart())
        const post = await setPostImage(token, category, caption, file)
        dispatch(setPostSuccess(post))
        // const posts = await getPosts(token)
        // dispatch(getPostsSuccess(posts))
    } catch (error) {
        dispatch(setPostFailure(error.toString()))
    }
}

export const removePost = (token, post_id) => async (dispatch) => {
    try {
        const post = await deletePost(token, post_id)
        dispatch(deletePostUI({post_id: post_id}))
    } catch (error) {
        throw new error
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

export const removeComment = (token, postId, commentId) => async (dispatch) => {
    try {
        const comment = await deleteComment(token, postId, commentId)
        dispatch(deleteCommentUI({post_id: postId, comment_id: commentId}))
    } catch (error) {
        throw new error
    }
}
