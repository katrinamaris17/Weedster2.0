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
    file: null,
    imgFile: null,
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
    
    const handleChange = (event) => {
        setValues({
            ...values, 
            imgFile: URL.createObjectURL(event.target.files[0]),
            file: event.target.files[0],
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

        dispatch(savePost(token, values.category, values.caption, values.file))
        
        setValues({
            ...values, 
            category: "",
            caption: "",
            file: null,
            imgFile: null, 
        })

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
        <input type="file"
            id="postImage" name="postImage"
            onChange={handleChange}
            accept="image/png, image/jpeg"/>
        <img src={values.imgFile}/>     
        {/* <ImageUpload /> */}
        <Button onClick={clickHandler}>
            Submit
        </Button>
    </form>
    </Paper>
  )
}