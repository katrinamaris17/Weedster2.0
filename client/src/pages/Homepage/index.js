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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <WrappedSignIn history={history}></WrappedSignIn>
          <WrappedSignUp history={history}></WrappedSignUp>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
