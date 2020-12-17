import React from "react";
import CommentsListItem from "./CommentsListItem.js";

export default function (props){
  const {comments}=props;
  return (
    <div>
      {comments.map((comment) => (
        comment.isDeleted === false ?
        <div key={comment._id}>
          <CommentsListItem postId={props.postId} comment={comment}/>
        </div>
        : null
      ))}
    </div>
  )
}