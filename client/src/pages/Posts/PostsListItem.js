import React from "react";
import CommentsList from "./CommentsList";
import CommentAdd from "./CommentAdd";
import ReactTimeAgo from "react-time-ago";
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "./postsSlice";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Likes from "./Likes";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 750,
    margin: '10px',
    flexGrow: 1,
  },

  media: {
    maxHeight: '80%',
    maxWidth: '80%',
    marginLeft: '10%',
  },

  buttons: {
    marginRight: '10px',
    fontSize: '9px',
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const { post } = props;
  const dispatch = useDispatch();
  const {token} = useSelector( (state) => { return state.viewer})
  const deleteHandler = (post_id) => {
    console.log("delete post!!!!");
    dispatch(removePost(token, post_id));
  };

  //   return (
  //     <div>
  //       {post.caption}
  //       <div>author: {post.author.username}</div>
  //       <div>
  //         time: <ReactTimeAgo date={post.createdAt} locale="en-US" />
  //       </div>
  //       <button onClick={deleteHandler}>DELETE POST</button>
  //       <CommentsList comments={post.comments} />
  //       <CommentAdd postId={post._id} />
  //     </div>
  //   );
  // }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image=""
          title="image"
        /> */}
        <CardContent>
        <Typography gutterBottom variant="h5" component='div'>
            {post.category}
          </Typography>
          <img className={classes.media} src={post.postPicture} alt="image"/>
          <Typography gutterBottom variant="h5" component='div'>
            {post.caption}
          </Typography>
          <Typography variant="body2" component='div' color='textSecondary'>
            author: {post.author.username}
          </Typography>
          <Typography variant="body2" component='div' color='textSecondary'>
            <ReactTimeAgo date={post.createdAt} locale="en-US" />
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs>
            <Button className={classes.buttons} variant="contained" color="primary">
              <Likes />
            </Button>
            <Button variant="contained" color="secondary" onClick={() => deleteHandler(post._id)}>
            <span className='fa fa-trash-o'></span>
              </Button>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" component='div'>
            <div>
              <CommentsList postId={post._id} comments={post.comments} />
              <CommentAdd postId={post._id} />
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



