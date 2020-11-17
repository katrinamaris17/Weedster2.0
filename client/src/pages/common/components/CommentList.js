import React, { useState, useEffect } from 'react';
import axios from 'axios'
import AddComment from './AddComment'
import CommentList from './CommentList';

export default function CommentList (props) {
    console.log(props)
    const [comments, setComments] = useState([]);
    useEffect (()=>{
      const getComments = async () => {
        const res = await axios.get(`/api/comment?postId=${props.postId}`); 
        console.log("inside useEffect getComments",res.data)
        setComments(res.data)
      }
      getComments()
    },[props.postId])
    const handleAddComment = newComment => {
      setComments([...comments, newComment ])
    }
    return (
      <div>
          {comments.map((comment)=>(
            <div>
              <p>{comment.message}</p>
            </div>
          ))}
          <AddComment userId={props.userId} postId={props.postId} onAddComment={handleAddComment}/>
      </div>
    )
}

