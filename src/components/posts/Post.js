import React, { Fragment, useEffect, useContext } from 'react'
import BlogContext from '../../context/blog/blogContext'
import { Link } from 'react-router-dom';
import { GET_POST } from '../../context/types';

const Post = ({match}) => {
    const blogContext = useContext(BlogContext)

    useEffect(() => {
        getPost(match.params.titleSlug);
        // eslint-disable-next-line
    }, [])

    const { getPost, posts, post, loading, clearPosts } = blogContext;
    return (
        <Fragment>
    <div className="hero-body">
      <div className="container ">
	<div className="columns is-multiline is-mobile is-centered">
	  <div className="column is-8 is-centered">
	    
	    <div className="header-content">
	      <div className="has-text-centered">
		<h1 className="title">
         { post.title}</h1>
	      </div>
	    </div>

	    <div className="subheader-content has-text-centered">
	      <p>posted in <Link to={`/category/${post.category}`}>{ post.category }</Link></p>
	      <hr/>
	    </div>
	    
	    <div className="single-content">
        { post.content }
        </div>
	    <div className="has-text-right">
	      <p><Link to='/' className="button">Back to Home</Link></p>
	    </div>
	  </div>
      </div>
      </div>
      </div>
        </Fragment>
    )
}


export default Post;