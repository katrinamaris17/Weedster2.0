import React, { useState } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function AddComment (props) {
    const viewer = useSelector( (state) => { return state.viewer})
    const [comment, setComment] = useState("");
    const handleChange = (event) => {
        setComment(event.target.value)
    } 
    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post('/api/comment', {
            "message": comment,
            "postId": props.postId,
        }, {
            headers: {
              authorization: viewer.token
            }
        }); 
        console.log(res.data)
        // props.onAddComment(res.data)
        setComment("")
    } 
    return (
        <div>
            <form>
                <textarea rows = "3" cols = "50" onChange = {handleChange} value={comment}/>
                <button onClick = {handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

