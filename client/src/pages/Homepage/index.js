import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
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

function Logo() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" img src="">
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
 logo: {
    margin: theme.spacing(1),
    backgroundImage: "url('./client/public/weedleaf_24.png')"
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
    style={{ minHeight: '100vh' }}
  >
  <Grid item xs={4}>
  <logo className={classes.logo}></logo>
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
