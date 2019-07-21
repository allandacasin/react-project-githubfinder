import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, settext] = useState('')

  const {setAlert, removeAlert} = alertContext;

  const onSubmit = e => {

    e.preventDefault();
    if(text === "") {

      const msg = 'Please enter something...';
      const type = 'light';

      setAlert(msg, type);

    } else {
      githubContext.searchUsers(text);
      removeAlert();      
    }    
  }


  const onClick = e => {
    githubContext.clearUsers();
    settext("");
   
  }

  const onChange = e => settext(e.target.value);

    return (
      <div>
        
        <form className="form" onSubmit={onSubmit}>
          <input type="text" name="text" placeholder="Search Users.." onChange={onChange} value={text}></input>
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>

        {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={onClick}>Clear</button>}
        
      </div>
    )
  
}

export default Search