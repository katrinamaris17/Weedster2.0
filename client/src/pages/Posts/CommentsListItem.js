import React from "react";
import ReactTimeAgo from 'react-time-ago'

export default function (props) {
  const { comment } = props;
  return (
    <div>
      {comment.message}
      <div>owner: {comment.owner.username}</div>
      <div>time: <ReactTimeAgo date={comment.created_at} locale="en-US"/></div>

    </div>
  );
}
