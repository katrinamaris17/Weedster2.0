import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { setPostUI, savePost } from "./postsSlice"

const initialValues = {
    category: "", 
    caption: "",
}
export default function (props){
    const dispatch = useDispatch() 
    const {token} = useSelector(state => state.viewer )

    const [values, setValues] = useState(initialValues)
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    
    const clickHandler = (e) => {
        e.preventDefault()
        dispatch(setPostUI({
            _id:"fakeID",
            author: {username: 'fakeUser'},
            createdAt: new Date(),
            caption: values.caption,
            category: values.category,
            comments: [],
        }))  
        setValues({
            ...values, 
            category: "",
            caption: "",
        })
        dispatch(savePost(token, values.category, values.caption))
    }

  return (
    <form>
        <select name="category" onChange={handleInputChange} value={values.category}>
            <option value="">SELECT Category...</option>
            <option value="Homegrowing">Homegrowing</option>
            <option value="Recipes">Recipes</option>
            <option value="Questions">Questions</option>
        </select>
        <textarea name="caption" rows="5" cols="100" onChange={handleInputChange} value={values.caption} />
        <br />

        <button onClick={clickHandler}>
            Submit
        </button>

    </form>
  )
}