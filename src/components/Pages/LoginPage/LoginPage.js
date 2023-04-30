import React from 'react'
//import '/LoginPage.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { login } from '../../../store/slices/LoginSlice'

function LoginPage() {

    const dispatch = useDispatch();

    const data = useSelector((state) => state.user);  

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({ name, email }));
    }

  return (
    <div className='main'>
      <form className='container' onSubmit={handleLogin}>
          <h2>Login Here</h2>
          <input type="text" className="input" placeholder="Name" value={name} 
                 onChange={(e) => setName(e.target.value)} required/>
        
          <input type="email" className="input" placeholder="Email" value={email}
                 onChange={(e) => setEmail(e.target.value)} required/>
        
          <button id="submit" type="submit">Log In</button>
      </form>
    </div>
  )
}

export default LoginPage