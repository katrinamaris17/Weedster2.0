import React from "react";
import CommentsList from "./CommentsList";
import CommentAdd from "./CommentAdd";
import ReactTimeAgo from 'react-time-ago'

export default function (props) {
  const { post } = props;
  return (
    <div>
      {post.caption}
      <div>author: {post.author.username}</div>
      <div>time: <ReactTimeAgo date={post.createdAt} locale="en-US"/></div>
      <CommentsList comments={post.comments} />
      <CommentAdd postId={post._id} />
    </div>
  );
}
