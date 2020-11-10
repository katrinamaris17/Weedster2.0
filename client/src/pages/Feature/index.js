import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useSelector} from 'react-redux';
import Navbar from '../../pages/common/components/Navbar';
import { Link, useHistory } from 'react-router-dom';
import UserPost from '../../pages/common/components/UserPost';


export default function SimpleContainer() {
  const { token } = useSelector(state => state.viewer);
  console.log("token",token);
  const history = useHistory();
  if(!token) {
    history.push("/")
  }
  return (
    <React.Fragment>
      <Navbar/>
      <CssBaseline />
      <Container maxWidth="sm">
        <UserPost/>
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
      </Container>
    </React.Fragment>
  );

  
}
