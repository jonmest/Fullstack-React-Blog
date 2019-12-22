import React, { useReducer } from 'react';
import axios from 'axios';
import BlogContext from './blogContext';
import BlogReducer from './blogReducer';
import {
    SEARCH_POSTS,
    GET_POST,
    GET_POSTS,
    CLEAR_POSTS
} from '../types'

const BlogState = props => {
    const initialState = {
        posts: [],
        searchPosts: [],
        post: {},
        loading: false
    }

    const [state, dispatch] = useReducer(BlogReducer, initialState);

    // Search users
    // const searchUsers = async text => {
    //     setLoading();
    //     const requestURL = `https://api.github.com/search/users?q=${text}&client_id=${
    //       process.env.REACT_APP_GITHUB_CLIENT_ID
    //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    //     const res = await axios.get(requestURL);
    //     dispatch({
    //         type: SEARCH_USERS,
    //         payload: res.data.items
    //     });
    //   };

    // Get User

  const getPost = async (titleSlug) => {
    const requestURL = `http://localhost:4000/api/v1/posts/${titleSlug}`
    const res = await axios.get(requestURL);
    dispatch({
        type: GET_POST,
        payload: res.data.data
    });
  }

  const getPosts = async () => {
    const requestURL = `http://localhost:4000/api/v1/posts/`
    const res = await axios.get(requestURL);
    dispatch({
        type: GET_POSTS,
        payload: res.data.data
    });
  }

  const getCategoryPosts = async (category) => {
    const requestURL = `http://localhost:4000/api/v1/posts/?category=${category}`
    const res = await axios.get(requestURL);
    dispatch({
        type: GET_POSTS,
        payload: res.data.data
    });
  }

    // // Get repos
    // const getUserRepos = async (username) => {
    //     setLoading();
    //     const requestURL = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
    //       process.env.REACT_APP_GITHUB_CLIENT_ID
    //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    //     const res = await axios.get(requestURL);
    //     dispatch({
    //         type: GET_REPOS,
    //         payload: res.data
    //     });
    
    //   }
    
    // Clear users
    const clearPosts = () => dispatch({ type: CLEAR_POSTS});


    return <BlogContext.Provider
    value={{
        posts: state.posts,
        post: state.post,
        loading: state.loading,
        // searchPosts: state.searchPosts,
        clearPosts: clearPosts,
        getPost: getPost,
        getPosts: getPosts,
        getCategoryPosts
    }}>
        {props.children}
    </BlogContext.Provider>
}

export default BlogState