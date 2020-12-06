import React from "react";

export default function (props){
  const {comment}=props;
  return (
    <p>
        {comment.message}
    </p>
  )
}
