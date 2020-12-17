import React from "react";
import PostsListItem from "./PostsListItem";

export default function (props){
  const {posts}=props;
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <PostsListItem post={post}/>
        </div>
      ))}
    </div>
  )
}