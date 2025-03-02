import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../css/login.css';
import Header from '../Commen-Components/header';
import Textbox from '../../ui/text-boxes';
import Checkbox from '../../ui/checkbox';
import RegisterButton from '../../ui/register-btn';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth'; // Import Firebase auth functions

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    const navigate = useNavigate(); // Using useNavigate hook for navigation

    // Check if user is already logged in when the component mounts
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setIsLoggedIn(true); // User is already logged in, update state
            navigate('/home'); // Redirect to home if logged in
        }
    }, [navigate]);

    // Handle email/password login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await doSignInWithEmailAndPassword(email, password);
            localStorage.setItem('user', JSON.stringify({ email })); // Store user data in localStorage
            setIsLoggedIn(true); // Update login state
            navigate('/home'); // Redirect to home page after successful login
        } catch (error) {
            console.error("Login Error: ", error.message); // Log error to the console
            alert(`Login Error: ${error.message}`); // Show error in a popup (optional)
        }
    };

    // Handle Google login
    const handleGoogleLogin = async () => {
        try {
            await doSignInWithGoogle();
            localStorage.setItem('user', JSON.stringify({ email })); // Store user data in localStorage
            setIsLoggedIn(true); // Update login state
            navigate('/home'); // Redirect to home page after successful Google login
        } catch (error) {
            console.error("Google Login Error: ", error.message); // Log error to the console
            alert(`Google Login Error: ${error.message}`); // Show error in a popup (optional)
        }
    };

    if (isLoggedIn) {
        return null; // Don't show the login form if the user is logged in
    }

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
                                {/* Error message has been removed from UI */}
                                
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

                                <RegisterButton buttonName="Login" margin={11.8} color='#fff' bgcolor='#487C92' />

                                <div className="social-login">
                                    {/* Google Login */}
                                    <img
                                        src="/login-img/google.png"
                                        className='social-img google'
                                        onClick={handleGoogleLogin} // Trigger Google login
                                        alt="Google"
                                        style={{ cursor: 'pointer' }}
                                    />
                                    {/* You can add Facebook login here in a similar way */}
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
