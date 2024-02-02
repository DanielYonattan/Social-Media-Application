import React, { createContext } from 'react'
import './login.css'
import Feed from './Feed';

import { useNavigate } from 'react-router-dom'

export var userId = "m"

export function setUserId(auxUser) {
   userId = auxUser
}
 
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
    const user = await res.json()
    setUserId(user)    
}


export default function Login() {
    const navigate = useNavigate()

    return (
        <div>

            <input placeholder='username' id='username'/>
            <input placeholder='password' id='password'/>
            <button className='login-button' onClick={async() => {
                await handleLogin()
                navigate("../home") 
            }}>Login</button>
            
        </div>

    );
}


