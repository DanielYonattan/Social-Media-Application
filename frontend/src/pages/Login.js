import './login.css'

export default function Login() {
    const handleLogin = () => {
        
    }

    return (
        <form className='login-box' onSubmit={handleLogin}>
            <input placeholder='username' className='username-input'></input>
            <input placeholder='password' className='password-input'></input>
            <button className='login-button'>Login</button>
        </form>
    );
}