import React, {Fragment, useEffect, useContext } from 'react'
import Spinner from '../layouts/Spinner'
import Repos from '../repos/Repos'
import {Link} from 'react-router-dom'
import GitHubContext from '../../context/github/githubContext';

const User = ({ match }) => {

  const githubContext = useContext(GitHubContext);

  const {getUser, user, loading, getUserRepos, repos } = githubContext;


  useEffect(() => {

    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, [])


    const { name, bio, company, public_gists, blog, location, followers, following, avatar_url,  html_url, public_repos, hireable } = user;
   
    if(loading) return <Spinner />;
    
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        Hireable: {''}
        {hireable ? (<i className="fas fa-check text-success"></i>) : (<i className="fas fa-times-circle text-danger" />)}
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
            <h1>{name}</h1>
            <p>Location: {location}</p>
            <a href={html_url} className="btn btn-dark my-1">Visit GitHub Profile</a>
          </div>
        
        {bio && (<Fragment>
        <div>
            <h3>Bio</h3>
            <p>{bio}</p>
            
            <ul>
              <li>
                {company && (<Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>)}
              </li>
              <li>
                {blog && (<Fragment>
                  <strong>Website:</strong> {blog}
                </Fragment>)}
              </li>
              <hr></hr>
              <li>
               <Fragment>
                  <span className="badge badge-light">Public Repos: {public_repos}</span>
                </Fragment>
              </li>
              <li>
                <Fragment>
                  <span className="badge badge-primary">Followers: {followers}</span>
                </Fragment>
              </li>
              <li>
                <Fragment>
                  <span className="badge badge-success">Following: {following}</span>
                </Fragment>
              </li>
              <li>
                <Fragment>
                  <span className="badge badge-dark">Public Gists: {public_gists}</span>
                </Fragment>
              </li>
            </ul>
        </div>
        </Fragment>)}        
        </div>
        <Repos repos={repos}/>
      </Fragment>
    )
}


export default User;