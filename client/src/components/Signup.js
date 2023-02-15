import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'


function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginbtn = async(e)=>{
    e.preventDefault()
    try{
      const a = await fetch('/signup',{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({email,password})
      })
      const b = await a.json();
      if(b.error){
        console.log('error occured')
      }else{
        navigate('/signin')
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

</div>
</div>


</div>
</div>
</div>
</div>
  
  )
}

export default Signup