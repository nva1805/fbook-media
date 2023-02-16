import React from 'react'
import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
    return (
        <div className='register'>
            <div className="cart">
                <div className="left">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder='User name' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <input type="password" placeholder='Password' />
                        <button className='btn btn-primary' placeholder='Password'>Register</button>
                    </form>
                </div>
                <div className="right">
                    <h1 className="app-name">FBOOK Media</h1>
                    <h3 className='right__wellcome'>Wellcome</h3>
                    <p>Already have an account?</p>
                    <Link to='/login' className='btn btn-light w-50 m-auto'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register