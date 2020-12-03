import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {setViewerToken} from '../../Viewer';
// import { blue } from '@material-ui/core/colors';
// import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navBackgroundColor : {
    backgroundColor: '#90b144',
  }
 
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { token } = useSelector(state => state.viewer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    dispatch(setViewerToken(null));
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBackgroundColor}>
        <Toolbar>
          <Button
            component={Link}
            to='/'
            color="inherit">
            About
          </Button>
          <Button
            component={Link}
            to='/Feature'
            color="inherit">
            Feature
          </Button>
          {
            token ?
              <Button
                color='inherit'
                onClick={handleSignOut}
              >
                Sign Out
              </Button> :
              <div>
                <Button
                  to='/signup'
                  component={Link}
                  color="inherit">
                  Sign Up
                </Button>
                <Button
                  to='/signin'
                  component={Link}
                  color="inherit">
                  Sign In
                </Button>
              </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};
