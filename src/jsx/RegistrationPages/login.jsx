import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/login.css'
import Header from '../Commen-Components/header';
import Textbox from '../../ui/text-boxes';
import Checkbox from '../../ui/checkbox';
import RegisterButton from '../../ui/register-btn';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // Handle login logic here, e.g., send data to backend API
    };

    return (
        <>
            <Header />
            <main>
                <div className="user-register">
                    <div className="login-bg">
                        <img src="/login-img/login-bg.png" className='login-bg-img' />
                        <img src="/login-img/LEAVES_1.png" className='login-leaves1' />
                        <img src="/login-img/LEAVES_2.png" className='login-leaves2' />
                        <img src="/login-img/LEAVES_3.png" className='login-leaves3' />
                        <img src="/login-img/LEAVES_4.png" className='login-leaves4' />
                        <img src="/login-img/fly-color.png" className='fly-color' />
                        <img src="/login-img/tree_leaf.png" className='tree-leaf' />
                    </div>
                    <div className="login-main">
                        <div className="login-welcome-msg">
                            <h1>Welcome Back <b>:)</b></h1>
                            <p>We're excited to see you again!</p>
                            <h3>"Garbage-free is the way to be!"</h3>
                        </div>
                        <div className="login">
                            <h1>Login To BinIT</h1>
                            <form onSubmit={handleLogin} className='login-form'>
                                <Textbox
                                    label='Email'
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='text-login'
                                />
                                <img src="/login-img/email.png" className='textbox-img email-img' />
                                <Textbox
                                    label='Password'
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='text-login'
                                />
                                <img src="/login-img/eyes.png" className='textbox-img pass-img' />
                                <Checkbox label='Remember Me' />
                                <div className="dont-account">
                                    Don't have an account yet?
                                    <Link to="/signup">Sign Up</Link>
                                </div>
                                <RegisterButton buttonName="Login" margin={11.8} color='#fff' bgcolor='#487C92' path='#' />
                                <div className="social-login">
                                    <img src="/login-img/google.png" className='social-img google' />
                                    <img src="/login-img/facebook.png" className='social-img fb' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Login;