import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPostUI, savePost } from "./postsSlice";
// import ImageUpload from "./ImageUpload"
import Button from "@material-ui/core/Button";
// import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: "10px",
    flexGrow: 1,
  },
  texField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto', 
  }
});

const initialValues = {
  category: "",
  caption: "",
  file: null,
  imgFile: null,
};
export default function (props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.viewer);

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      imgFile: URL.createObjectURL(event.target.files[0]),
      file: event.target.files[0],
    });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(
      setPostUI({
        _id: "fakeID",
        author: { username: "fakeUser" },
        createdAt: "0",
        caption: values.caption,
        category: values.category,
        comments: [],
      })
    );

    dispatch(savePost(token, values.category, values.caption, values.file));

    setValues({
      ...values,
      category: "",
      caption: "",
      file: null,
      imgFile: null,
    });
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Grid>
            <select
              name="category"
              onChange={handleInputChange}
              value={values.category}
            >
              <option value="">SELECT Category...</option>
              <option value="Homegrowing">Homegrowing</option>
              <option value="Recipes">Recipes</option>
              <option value="Questions">Questions</option>
            </select>
          </Grid>
          <TextField
            className={classes.texField}
            id="outlined-multiline-static"
            label=""
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="outlined"
            name="caption"
            onChange={handleInputChange}
            value={values.caption}
          />
          <Grid>
          <input
            type="file"
            id="postImage"
            name="postImage"
            onChange={handleChange}
            accept="image/png, image/jpeg"
          />
          <img src={values.imgFile} />
          <Button onClick={clickHandler} color="primary">
            Submit
          </Button>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
