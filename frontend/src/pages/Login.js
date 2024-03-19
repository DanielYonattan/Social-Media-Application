import React, { createContext, useContext, useState } from 'react'
import './login.css'
import Feed from './Feed';
import { AuthContext } from '../UserContext.js'
import { useNavigate } from 'react-router-dom'




export default function Login() {
    const auth = useContext(AuthContext)

    const handleLogin = () => {
        const username = document.querySelector('#username').value
        const password = document.querySelector('#password').value

        auth.loginAction(username, password)
    }


    return (
        
        <div>
            
            <input placeholder='username' id='username'/>
            <input placeholder='password' id='password'/>
            <button className='login-button' onClick={handleLogin}>Login</button>
        </div>
      
    );
}

