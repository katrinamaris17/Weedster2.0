import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function AddComment (props) {
    // console.log(props)
    const [comment, setComment] = useState("");
    const handleChange = (event) => {
        setComment(event.target.value)
    } 
    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post('/api/comment', {
            "message": comment,
            "postId": props.postId,
            "userId": props.userId,
        }); 
        console.log(res.data)
        props.onAddComment(res.data)
        setComment("")
    } 
    return (
        <div>
            <form>
                <textarea rows = "3" cols = "50" onChange = {handleChange}>
                    {comment}
                </textarea>
                <button onClick = {handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

