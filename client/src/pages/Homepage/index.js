import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { WrappedSignIn, WrappedSignUp } from '../Viewer';
import {useHistory } from 'react-router-dom';

export default function SimpleContainer() {
  const history = useHistory();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <WrappedSignIn history={history}></WrappedSignIn>
        <WrappedSignUp history={history}></WrappedSignUp>
      </Container>
    </React.Fragment>
  );
}