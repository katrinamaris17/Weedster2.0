import React from 'react';
// import axios from 'axios'
import AddComment from './AddComment'

export default function CommentList (props) {
    console.log(props)
    // const [comments, setComments] = useState([]); << don't need state b/c coming from props
    // useEffect (()=>{
    //   const getComments = async () => {
    //     const res = await axios.get(`/api/comment?postId=${props.postId}`); 
    //     console.log("inside useEffect getComments",res.data)
    //     setComments(res.data)
    //   }
    //   getComments()
    // },[props.postId])

    // const handleAddComment = newComment => {
    //   setComments([...comments, newComment ])
    // }
    return (
      <div>
          {props.comments.map((comment)=>(
            <div key={comment._id}>
              <p>{comment.message}</p>
            </div>
          ))}
          <AddComment userId={props.userId} postId={props.postId}/>
      </div>
    )
}

