import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import PostsList from "./PostsList"
import PostAdd from "./PostAdd"
import {fetchPosts} from "./postsSlice"
import { useHistory } from "react-router-dom";

export default function () {
  const dispatch = useDispatch()
  const {token} = useSelector( (state) => { return state.viewer})
  const {posts, isLoading} = useSelector( (state) => { return state.posts})
  useEffect(() => {
    dispatch(fetchPosts(token))
  },[token, dispatch])
  const renderedPostsList = isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <PostsList posts={posts}/>
  )
  return (
    <div>
      <PostAdd/>
      {renderedPostsList}
    </div>
  )
}
