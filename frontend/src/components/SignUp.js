import './SignUp.css'
import URL from '../index.js'


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
        <label id="username_label" for="username">Enter a username, no spaces: </label>
        <input placeholder='username' id='username_signup'/> <br></br>
        
        <label id="pass_label" for="password">Enter a password: </label>
        <input placeholder='password' id='password_signup'/> <br></br>
        
        <label id="email_label" for="email">Enter your email, no spaces: </label>
        <input placeholder='email' id='email'/> <br></br>
       
        <input type="submit" value="Submit"></input>
    </form>
    )
}