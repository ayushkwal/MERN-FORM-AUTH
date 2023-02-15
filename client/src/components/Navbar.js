import React, { useEffect, useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

function Navbar() {
  const navigate = useNavigate();
  const signoutHandler = ()=>{
    localStorage.clear();
    const a = fetch('/signout');
    navigate('/signin')
  }
  return (
    <>
      <p>Navigation bar</p>
      {localStorage.getItem('userId')?
      <div>
        <button onClick={()=>signoutHandler()}>Signout</button>
      </div>
      :
      <div>
        <Link to='/signin'>Signin</Link>
        <Link to='/signup'>Signup</Link>
      </div>}
    </>
  )
}

export default Navbar