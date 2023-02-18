import React, { useContext } from 'react'
import './login.scss'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/authContext';

const Login = () => {
    const { login } = useContext(AuthContext)
    const handleLogin = () => {
        login()
    }

    return (
        <div className='login'>
            <div className="cart">
                <div className="left">
                    <h1 className="app-name">FBOOK Media</h1>
                    <h4>
                        Facebook helps you connect and share with the people in your life.
                    </h4>
                    <p>Don't have an account?</p>
                    <Link to='/register' className='btn btn-light w-50 m-auto'>Register</Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <button
                            className='btn btn-primary'
                            placeholder='Password'
                            onClick={handleLogin}
                        >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login