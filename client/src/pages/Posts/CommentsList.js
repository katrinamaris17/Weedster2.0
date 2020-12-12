import React from "react";
import CommentsListItem from "./CommentsListItem.js";

export default function (props){
  const {comments}=props;
  return (
    <ul>
      {comments.map((comment) => (
        comment.isDeleted === false ?
        <li key={comment._id}>
          <CommentsListItem postId={props.postId} comment={comment}/>
        </li>
        : null
      ))}
    </ul>
  )
}