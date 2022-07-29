import React from 'react'
import { useState } from 'react'

const LoginForm = ({setIsAuth}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const checkAuth = (e)=>{
        e.preventDefault();
            if(email==="dk@123" && password==="1234"){
            setIsAuth(true);
        }
    }

    // console.log(isAuth)
    
  return (
    <form>
        <input 
          placeholder='dk@123' 
          type="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <br/>
        <input 
          placeholder='1234' 
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <br/>
        <button onClick={checkAuth}>Submit</button>
    </form>
  )
}

export default LoginForm