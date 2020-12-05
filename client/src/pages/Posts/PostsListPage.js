import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import PostsList from "./PostsList"
import {fetchPosts} from "./postsSlice"
export default function () {
  const dispatch = useDispatch()
  const {token} = useSelector( (state) => { return state.viewer})
  const {posts, isLoading, error} = useSelector( (state) => { return state.posts})
  useEffect(() => {
    dispatch(fetchPosts(token))
  },[token])
  const renderedPostsList = isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <PostsList posts={posts}/>
  )
  return (
    <div>{renderedPostsList}</div>
  )
}
