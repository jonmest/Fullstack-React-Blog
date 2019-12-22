import React   from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="navbar is-dark " role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
<span className="title has-text-white">
    Blog
    </span>
    </Link>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>

    )
}

export default Navbar