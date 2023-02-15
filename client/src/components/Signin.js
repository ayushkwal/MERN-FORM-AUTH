import React,{useState, useContext} from 'react'
import {UserContext} from '../App'
import {Link,useNavigate} from 'react-router-dom'

function Signin() {
  const {state,dispatch} = useContext(UserContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginbtn = async(e)=>{
    e.preventDefault()
    try{
      const a = await fetch('/signin',{
        method:'post',
        headers:{
          'content-type':'application/json'
        },        
        body:JSON.stringify({email,password})
      })
      const b = await a.json();
      if(b.error){
        console.log('error occured',b)
      }else{
        dispatch({type:'USER',payload:b})
        navigate('/profile')
      }

    }catch(err){
      console.log(err,'is error occuring')
    }
  }

  return (
    <div>
    <div>
   <div>
    <div id="wrapper">
<div className="container">
{/* <div className="phone-app-demo"></div> */}
<div className="form-data">
 <form action="">
   <div className="logo">
     <h1>Instagram.</h1>
   </div>
   <input type="text" placeholder="email" onChange={e=>setEmail(e.target.value)} value={email}/>
   <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} value={password}/>
   <button className="form-btn" type="submit" onClick={loginbtn}>Log in</button>
   <span className="has-separator">Or</span>
   
   <Link className="password-reset" to="#">Forgot password?</Link>
 </form>
 <div className="sign-up">
   Don't an account? <Link to="/signup">Sign up</Link>
 </div>
 <div className="get-the-app">
   <span>Get the app</span>
   <div className="badge">
     <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="android App" />
     <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="ios app" />
   </div>
 </div>
</div>
</div>

<footer>
<div className="container">
 <nav className="footer-nav">
   <ul>
     <li><Link to="#">About Us</Link></li>
     <li><Link to="#">Support</Link></li>
     <li><Link to="#">Jobs</Link></li>
     <li><Link to="#">Privacy</Link></li>
     <li><Link to="#">Terms</Link></li>
     <li><Link to="#">Profiles</Link></li>
     <li><Link to="#">Languages</Link></li>
   </ul>
 </nav>
 <div className="copyright-notice">
   &copy; 2021 Instagram
 </div>
</div>
</footer>
</div>
</div>
</div>
</div>
  )
}

export default Signin