import React,  { Fragment, useEffect, useContext } from 'react';
import Post from '../posts/Post';
import PostItem from '../posts/PostItem';

import BlogContext from '../../context/blog/blogContext'
import { Link } from 'react-router-dom';
import { GET_POSTS } from '../../context/types';

const Home = () => {
    const blogContext = useContext(BlogContext)

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line
    }, [])

    const { getPosts, posts, post, loading, clearPosts } = blogContext;


    return (
        <Fragment>
            <section className="hero is-medium is-dark is-bold">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
      Welcome to my blog        </h1>
      <h2 className="subtitle">
I hope you'll like it!      </h2>
    </div>
  </div>
</section>
<section className="section">
    <div className="container">

    {posts.map(post => (
                    <PostItem post={post}></PostItem>
                ))}
    </div>
</section>

            

        </Fragment>
    )}

export default Home