import '../pages/login.css'
import {URL} from '../index.js'

async function handleSignUp() {
    const username = document.querySelector('#username_signup').value
    const password = document.querySelector('#password_signup').value
    const email = document.querySelector('#email').value

    const userReg = {"username": username,
    
                     "email": email,
                     "password": password
                    }

    try { 
        await fetch(`${URL}/api/auth/register`, {
            method: 'POST',
            headers: {'content-Type': 'application/json'},  // headers, mode, and json.stringify
            mode: 'cors',
            body: JSON.stringify(userReg)
        })
    }
    catch(err) {
        console.log(err)
    }   
}

export default function SignUp() {
    return (
    <form onSubmit={handleSignUp}>
        <div className='signin'>
            <input placeholder='username' id='username_signup'/>
            
            <input placeholder='password' id='password_signup'/> 
            
            <input placeholder='email' id='email'/> 
        
            <input className="submit-signup" type="submit" value="Submit"></input>
        </div>
    </form>
    )
}