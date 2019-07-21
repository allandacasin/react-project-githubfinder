import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Navbar = ({icon, title}) => {

  return (

    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
       
        <Link className="navbar-brand" to="/"><i className={icon}></i> {title}</Link>

        <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )    
  
}


Navbar.defaultProps = {

  title: 'Github Finder',
  icon: 'fab fa-github'

};

Navbar.propTypes = {

  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}


export default Navbar;