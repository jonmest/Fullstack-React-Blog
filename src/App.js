import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar'
import Post from './components/posts/Post'
import Home from './components/pages/Home'
import Category from './components/pages/Category'
import Footer from './components/layouts/Footer'

import BlogState from './context/blog/BlogState';

function App() {
  return (
    <BlogState>
            <Router>
    <Navbar/>
    <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/:titleSlug' component={Post}></Route>
    <Route exact path='/category/:categorySlug' component={Category}></Route>

    </Switch>
    </Router>
    <Footer/>
    </BlogState>
  );
}

export default App;
