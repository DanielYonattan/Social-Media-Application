import React, { createContext } from 'react'
import './login.css'
import Feed from './Feed';

import { useNavigate } from 'react-router-dom'

 

async function handleLogin() {
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    const res = await fetch("http://localhost:3000/api/auth/login", {
        method: 'POST',
        headers: {'content-Type': 'application/json'},  // headers, mode, and json.stringify
        mode: 'cors',
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })

    return await res.json()._id
    
}


export default function Login() {
    const navigate = useNavigate()

    return (
        <div>
            <input placeholder='username' id='username'/>
            <input placeholder='password' id='password'/>
            <button className='login-button' onClick={() => {
                const userId = handleLogin()
                const UserContext = createContext("null")
                navigate("../home") 
            }}>Login</button>
            
        </div>

    );
}


