import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { WrappedSignIn, WrappedSignUp } from '../Viewer';
import {useHistory } from 'react-router-dom';


// export default function SimpleContainer() {
//   const history = useHistory();
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="md">
//         <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
//         <WrappedSignIn history={history}></WrappedSignIn>
//         <WrappedSignUp history={history}></WrappedSignUp>
//         </Typography> 

//       </Container>
//     </React.Fragment>
//   );
// }


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 140,
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
    style={{ minHeight: '200vh' }}
  >
  <Grid item xs={6}>
  <Paper className={classes.paper}>
    <WrappedSignIn history={history}></WrappedSignIn>
    <WrappedSignUp history={history}></WrappedSignUp>
    </Paper>
  </Grid>   
</Grid>
      {/* <Grid container spacing={6}>
        <Grid item md={4}>
          <Paper className={classes.paper}>
          <WrappedSignIn history={history}></WrappedSignIn>
          <WrappedSignUp history={history}></WrappedSignUp>
          </Paper>
        </Grid>
      </Grid> */}
    </div>
  );
}
