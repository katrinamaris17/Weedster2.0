import React from "react";
import ReactTimeAgo from "react-time-ago";
import { useDispatch, useSelector } from "react-redux";
import { removeComment } from "./postsSlice";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    margin: "10px",
    backgroundColor: "#F3F3F6",
  },
  media: {
    height: 140,
  },
});

export default function (props) {
  const classes = useStyles();
  const { comment, postId } = props;
  const dispatch = useDispatch();
  const { token } = useSelector((state) => {
    return state.viewer;
  });
  const deleteHandler = (comment_id) => {
    console.log("comment removed!!!!");
    dispatch(removeComment(token, postId, comment_id));
  };
  return (
    <div>
      <Card className={classes.root}>
        <div>
          <CardContent>
            <div>
              <Typography>{comment.message}</Typography>
              <Typography variant="body2" component="div" color="textSecondary">
                owner: {comment.owner.username}
              </Typography>
              <Typography variant="body2" component="div" color="textSecondary">
                <ReactTimeAgo date={comment.created_at} locale="en-US" />
              </Typography>
            </div>
          </CardContent>
        </div>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deleteHandler(comment._id)}
          >
            <span className="fa fa-trash-o"></span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
