import React,  { Fragment, useEffect, useContext } from 'react';
import Post from '../posts/Post';
import PostItem from '../posts/PostItem';

import BlogContext from '../../context/blog/blogContext'
import { Link } from 'react-router-dom';
import { GET_POSTS } from '../../context/types';

const Category = ({match}) => {
    const blogContext = useContext(BlogContext)

    useEffect(() => {
        getCategoryPosts(match.params.categorySlug);
        // eslint-disable-next-line
    }, [])

    const { categorySlug } = match.params

    const { getCategoryPosts, posts, post, loading, clearPosts } = blogContext;


    return (<Fragment>
       
            { (posts.length > 0) ? (         <Fragment>    <section className="hero is-medium is-dark is-bold">
  <div className="hero-body">
    <div className="container has-text-centered">
      <h1 className="title">
            { categorySlug }        </h1>

    </div>
  </div>
</section>
<section className="section">
    <div className="container">

    { posts.map(post => (
                    <PostItem post={post}></PostItem>
                ))
    }

    </div>
</section>
</Fragment>)
    :
    (<Fragment>
        <section className="hero is-fullheight is-medium is-dark is-bold">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
      How curious... you've searched for a category that does not exist!       </h1>
    
    </div>
  </div>
</section>
        </Fragment>
        )
    
    }


            

        </Fragment>
    )}

export default Category