import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Navbar from './pages/common/components/Navbar';
import Homepage from './pages/Homepage';
import Feature from './pages/Feature';
import PostsListPage from "./pages/Posts/PostsListPage"
import {
  WrappedSignUp,
  WrappedSignIn,
} from './pages/Viewer';

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Route path='/signup' component={WrappedSignUp}/>
      <Route path='/signin' component={WrappedSignIn}/>
      {/* <Route path='/homepage' component={Homepage}/> */}
      <Route path='/feature' component={Feature}/>
      <Route path='/posts' component={PostsListPage}/>
      <Route exact path="/" component={Homepage}/>
    </Router>
  );
}

export default App;