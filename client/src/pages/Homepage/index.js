import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import { WrappedSignIn, WrappedSignUp } from "../Viewer";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 200,
    backgroundImage: "url('/logo192.png')",
    backgroundSize: "30%",
    backgroundColor: "white",
  },
}));

export default function FullWidthGrid() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "80vh" }}
      >
        <Grid item xs={6}>
          <CardActionArea>
            {/* <CardMedia className={classes.media} /> */}
            <CardContent>
              <Typography gutterBottom variant="h2" component="h3" className={classes.paper}>
                Welcome to Weedster!
              </Typography>
            </CardContent>
          </CardActionArea>
          <Paper className={classes.paper}>
            <WrappedSignIn history={history}></WrappedSignIn>
            <br></br>
            <WrappedSignUp history={history}></WrappedSignUp>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
