import React, { useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navbar from '../../pages/common/components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import PostsList from "./PostsList"
import PostAdd from "./PostAdd"
import {fetchPosts} from "./postsSlice"
import { useHistory } from "react-router-dom";
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

export default function () {
  const classes = useStyles();
  const dispatch = useDispatch()
  const {token} = useSelector( (state) => { return state.viewer})
  const {posts, isLoading} = useSelector( (state) => { return state.posts})
  useEffect(() => {
    dispatch(fetchPosts(token))
  },[token, dispatch])
  const renderedPostsList = isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <PostsList posts={posts}/>
  )
  return (
    <div className= {classes.body}>
      <Navbar/>
      <CssBaseline />
      <Container className={classes.center}>
        <PostAdd/>
        {renderedPostsList}
      </Container>
    </div>
  )
}