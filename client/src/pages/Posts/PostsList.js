import React from "react";
import PostsListItem from "./PostsListItem";

export default function (props){
  const {posts}=props;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <PostsListItem post={post}/>
        </li>
      ))}
    </ul>
  )
}