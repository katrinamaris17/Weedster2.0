import React, { useEffect } from "react";

export default function (props){
  const {posts}=props;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <p>
            {post.caption}
          </p>
        </li>
      ))}
    </ul>
  )
}