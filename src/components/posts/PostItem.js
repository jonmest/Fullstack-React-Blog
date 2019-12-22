import React, { Fragment }  from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const PostItem = ({post: {title, slug, content, category}}) => {

        return (
            <Fragment>
                <section className="section">
            <div className="header-content">
            <div className="has-text-centered">
          <h1 className="title">
          { title }
          </h1>
            </div>
          </div>	    
          
          <div className="subheader-content has-text-centered">
            <p>posted in <Link  to={`/category/${category}`}>{ category }</Link></p>
            <hr/>
          </div>
  
          <div className="content">
          { content.slice(0, 500) }
            <div className="has-text-centered">
          <p><Link className="button" to={`/${slug}`}>Continue Reading</Link></p>
            </div>
          </div>
          </section>
</Fragment>
        )

}
PostItem.propTypes = {
    post: PropTypes.object.isRequired,    
}
export default PostItem