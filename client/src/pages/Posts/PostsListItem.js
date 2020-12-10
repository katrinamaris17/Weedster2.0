import React from "react";
import CommentsList from "./CommentsList";
import CommentAdd from "./CommentAdd";
import ReactTimeAgo from "react-time-ago";
import { useDispatch } from 'react-redux';
import { deletePostUI } from './postsSlice';

export default function (props) {
  const { post } = props;
  const dispatch = useDispatch() 
  const deleteHandler = (e) => {
    console.log('delete post!!!!')
    dispatch(deletePostUI());
  };

  return (
    <div>
      {post.caption}
      <div>author: {post.author.username}</div>
      <div>
        time: <ReactTimeAgo date={post.createdAt} locale="en-US" />
      </div>
      <button onClick={deleteHandler}>DELETE POST</button>
      <CommentsList comments={post.comments} />
      <CommentAdd postId={post._id} />
    </div>
  );
}
