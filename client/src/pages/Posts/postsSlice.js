import {createSlice} from '@reduxjs/toolkit';

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
                posts: action.payload,
            };
        },
    },
});

export const {
    getPosts,
} = posts.actions;

export default posts.reducer;