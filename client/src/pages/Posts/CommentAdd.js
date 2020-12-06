import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { saveComment } from './postsSlice';

const initialValues = {
    message: "", 
}

export default function (props) {
    const dispatch = useDispatch() 
    const {token} = useSelector(state => state.viewer )
    const [values, setValues] = useState(initialValues)
    const {postId} = props
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveComment(token, postId, values.message))
        setValues({
            ...values,
            message: "",
        })
    }
    return (
        <div>
            <form>
                <textarea name="message" rows = "3" cols = "50" onChange = {handleInputChange} value={values.message}/>
                <button onClick = {handleSubmit}>Submit</button>
            </form>
        </div>
    )
}