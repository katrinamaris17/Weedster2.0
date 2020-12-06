import React from "react";
import CommentsListItem from "./CommentsListItem.js";

export default function (props){
  const {comments}=props;
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment._id}>
          <CommentsListItem comment={comment}/>
        </li>
      ))}
    </ul>
  )
}