import React from "react";
import CommentsList from "./CommentsList";
import CommentAdd from "./CommentAdd";
import ReactTimeAgo from "react-time-ago";
import { useDispatch } from 'react-redux';
import { deletePostUI } from './postsSlice';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Likes from './Likes';

const useStyles = makeStyles({
  root: {
    maxWidth: 750,
  },
  media: {
    height: 100,
  },
});


export default function MediaCard(props) {
  const classes = useStyles();
  const { post } = props;
  const dispatch = useDispatch() 
  const deleteHandler = (e) => {
    console.log('delete post!!!!')
    dispatch(deletePostUI());
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
      <CardMedia
        className={classes.media}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {post.caption}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        <div>author: {post.author.username}</div>
        <div>
        time: <ReactTimeAgo date={post.createdAt} locale="en-US" />
        <Likes/>
        <button onClick={deleteHandler}>DELETE POST</button>
        <CommentsList comments={post.comments} />
        <CommentAdd postId={post._id} />
        </div>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
}