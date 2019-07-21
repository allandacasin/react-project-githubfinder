import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const UserItem = ({user: {avatar_url, html_url, login}}) => {

   
  return (
    
      <div className="card text-center">
        <div className="text-center">
          <img src={avatar_url} alt="" className="rounded-circle" style={{ width: '60px'}} /> 
        </div>
                  
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
      </div>

  )
  
}

UserItem.propTypes = {

  user: PropTypes.object.isRequired,

}


export default UserItem;