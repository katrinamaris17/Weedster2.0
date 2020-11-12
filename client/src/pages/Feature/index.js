import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useSelector} from 'react-redux';
import Navbar from '../../pages/common/components/Navbar';
import { Link, useHistory } from 'react-router-dom';
import UserPost from '../../pages/common/components/UserPost';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  body: {
    backgroundImage: "url('/wallpaper.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundColor: 'lightgreen',
    height: '100vh',
  },
center: {
  margin: 'auto',
  width: '50%',
  padding: '10px',
  position: 'center'

}});
export default function SimpleContainer() {



  const classes = useStyles();


  const { token } = useSelector(state => state.viewer);
  console.log("token",token);
  const history = useHistory();
  if(!token) {
    history.push("/")
  }
  return (
    <html className={classes.body}>
    {/* <React.Fragment> */}
      <Navbar/>
      <CssBaseline />
      <Container className={classes.center}>
        <UserPost/>
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
      </Container>
    {/* </React.Fragment> */}
    </html>
  );

  
}
