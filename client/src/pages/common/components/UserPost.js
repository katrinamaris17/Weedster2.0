import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import Likes from "./Likes";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  red: {
    color: "#A4C820",
  },
  background: {
    backgroundColor: "white",
  },
  postTitle: {
    backgroundColor: "#90b144",
    color: "white",
    paddingLeft: 8,
  },
  post: {
    width: "100%",
  },
});

export default function () {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [posts, setPosts] = useState([]);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    axios.get("/api/post").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setPost(e.target.value);
  };

  const changeTitleHandler = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const changeCategoryHandler = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const clickHandler = async () => {
    if (post === "" || title === "") {
      alert("needs content");
      return;
    }
    const res = await axios.post("/api/post", {
      title: title,
      caption: post,
      category: category,
      userId: 1,
    });
    console.log(res.data);
    const newPostsState = [res.data, ...posts];
    setPosts(newPostsState);
    setPost("");
    setTitle("");
    setCategory("");
  };

  return (
    <>
      <h2></h2>
      <input type="text" onChange={changeTitleHandler} value={title} />
      <select onChange={changeCategoryHandler} value={category}>
        <option value="SELECT">SELECT Category...</option>
        <option value="Homegrowing">Homegrowing</option>
        <option value="Recipes">Recipes</option>
        <option value="Questions">Questions</option>
      </select>
      <textarea rows="5" cols="100" onChange={changeHandler} value={post} />
      <br />

      <button onClick={clickHandler} className={classes.red}>
        Submit
      </button>

      {posts?.map((post, index) => {
        return (
          <Card
            className={`${classes.background} ${classes.root} ${classes.post}`}
            key={post.id}
          >
            <CardContent>
              <Typography
                className={classes.postTitle}
                color="textPrimary"
                gutterBottom
                backgroundColor="#FFFFFF"
              >
                <h1>{post.title || "put in title"}</h1>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {post.caption}
              </Typography>
              <Typography variant="body2" component="p">
                {post.category}
              </Typography>
              {/* <CardActions>
                  <Button size="small" color="primary">
                    Comment
                  </Button>
                </CardActions> */}
              <CommentList postId={post.id} userId={post.userId} />
            </CardContent>
            <Likes />
          </Card>
        );
      })}
    </>
  );
}
