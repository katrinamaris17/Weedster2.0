import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { setPostUI, savePost } from "./postsSlice"
import ImageUpload from "./ImageUpload"
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";



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
            createdAt: '0',
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
    <Paper p={5}>
    <form>
        <select name="category" onChange={handleInputChange} value={values.category}>
            <option value="">SELECT Category...</option>
            <option value="Homegrowing">Homegrowing</option>
            <option value="Recipes">Recipes</option>
            <option value="Questions">Questions</option>
        </select>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
          name="caption"
          onChange={handleInputChange}
          value={values.caption}
        />
        {/* <textarea name="caption" rows="5" cols="50" onChange={handleInputChange} value={values.caption} /> */}
        <br />
        <ImageUpload />
        <Button onClick={clickHandler}>
            Submit
        </Button>
    </form>
    </Paper>
  )
}