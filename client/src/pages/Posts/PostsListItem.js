import React from "react";
import CommentsList from "./CommentsList";
import CommentAdd from "./CommentAdd";

export default function (props){
  const {post}=props;
  return (
    <div>
        {post.caption}
        <CommentsList comments={post.comments}/>
        <CommentAdd postId={post._id}/>
    </div>
  )
}
