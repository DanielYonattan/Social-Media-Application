import './login.css'
import { useNavigate } from 'react-router-dom'

export let user = "";

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

    user = await res.json()._id
}

export default function Login() {
    const navigate = useNavigate()
    return (
        <div>
            <input placeholder='username' id='username'/>
            <input placeholder='password' id='password'/>
            <button className='login-button' onClick={() => {
                handleLogin() 
                navigate("../home")
            }}>Login</button>
            
        </div>
    );
}

