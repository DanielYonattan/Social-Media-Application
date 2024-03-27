import React, { createContext, useContext, useState } from 'react'
import './login.css'
import Feed from './Feed';
import { AuthContext } from '../UserContext.js'
import { useNavigate } from 'react-router-dom'
import SignUp from '../components/SignUp';




export default function Login() {
    const [signUp, setSignUp] = useState(false);
    const auth = useContext(AuthContext)

    const handleLogin = () => {
        const username = document.querySelector('#username_login').value
        const password = document.querySelector('#password_login').value

        auth.loginAction(username, password)
    }


    function LoginForm() {
        return (
            <div className='signin'>
                <input placeholder='username' id='username_login'/>
                <input placeholder='password' id='password_login'/>
                <button className='login-button' onClick={handleLogin}>Login</button>
            </div>
        )
    }

    return ( 
        <div className='login-page'>
            <button className='signup-button' onClick={() => setSignUp(!signUp)}>Sign-up</button>
            {!signUp ? <LoginForm /> : <SignUp />}
        </div>
    );
}

