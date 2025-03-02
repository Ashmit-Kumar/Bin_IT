import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/signup.css'
import Header from '../Commen-Components/header';
import Textbox from '../../ui/text-boxes';
import Checkbox from '../../ui/checkbox';
import RegisterButton from '../../ui/register-btn';
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle, doSignInWithFacebook } from '../firebase/auth'; // Import Firebase auth functions

function SignUp() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    // const [error, setError] = useState(''); // For error messages
    const navigate = useNavigate(); // For redirecting after successful signup

    // Handle email/password signup
    const handleEmailSignup = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (pass !== confirmpass) {
            setError("Passwords do not match!");
            return;
        }

        try {
            // Create the user with email and password
            await doCreateUserWithEmailAndPassword(email, pass);
            navigate('/home'); // Redirect to home page after successful signup
        } catch (error) {
            console.error("Signup Error: ", error.message); // Log error to the console
            alert(`Signup Error: ${error.message}`); // Set error message if signup fails
        }
    };

    // Handle Google signup
    const handleGoogleSignup = async () => {
        try {
            await doSignInWithGoogle();
            navigate('/home'); // Redirect to home page after successful Google signup
        } catch (error) {
            console.error("Google SignUp Error: ", error.message); // Log error to the console
            alert(`Google SignUp Error: ${error.message}`);// Set error message if signup fails
        }
    };

    // Handle Facebook signup
    const handleFacebookSignup = async () => {
        try {
            await doSignInWithFacebook();
            navigate('/home'); // Redirect to home page after successful Facebook signup
        } catch (error) {
            console.error("Facebook SignUp Error: ", error.message); // Log error to the console
            alert(`Facebook SignUp Error: ${error.message}`); // Set error message if signup fails
        }
    };

    return (
        <>
            <Header />
            <main>
                <div className="user-register">
                    <div className="signup-bg">
                        <img src="/signup-img/sigup-img-1.png" className='sigup-img-1' />
                        <img src="/signup-img/sigup-img-2.png" className='sigup-img-2' />
                        <img src="/signup-img/sigup-img-3.png" className='sigup-img-3' />
                        <img src="/signup-img/sigup-img-4.png" className='sigup-img-4' />
                        <div className="green"></div>
                        <div className="lightgreen"></div>
                    </div>
                    <div className="signup-main">
                        <div className="signup-welcome-msg">
                            <span>"Be the part of the solution, not the part of the problem."</span>
                        </div>
                        <div className="signup">
                            <h1>Create An Account</h1>
                            <form onSubmit={handleEmailSignup} className='signup-form'>
                                {/* {error && <div className="error-message">{error}</div>} Display error if signup fails */}

                                <Textbox
                                    label='First Name'
                                    type="text"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    className='text-signup'
                                />
                                <Textbox
                                    label='Last Name'
                                    type="text"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    className='text-signup'
                                />
                                <Textbox
                                    label='Email'
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='text-signup'
                                />
                                <Textbox
                                    label='Phone Number'
                                    type="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className='text-signup'
                                />
                                <Textbox
                                    label='Create Password'
                                    type="password"
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    className='text-signup'
                                />
                                <Textbox
                                    label='Confirm Password'
                                    type="password"
                                    value={confirmpass}
                                    onChange={(e) => setConfirmPass(e.target.value)}
                                    className='text-signup'
                                />
                                <div className="tick">
                                    <Checkbox label='By creating an account, you accept' />
                                    <Link to='#' style={{ fontSize: '1.2rem', color: 'blue' }}>Terms & Conditions</Link>
                                </div>
                                <div className="create-btn">
                                    <RegisterButton
                                        buttonName="Create Account"
                                        margin={13}
                                        color='white'
                                        bgcolor='#487C92'
                                        path='#'
                                    />
                                </div>
                                <div className="social-signup">
                                    <RegisterButton
                                        buttonName="Signup Using Facebook"
                                        color='#black'
                                        bgcolor='#C6FCFC'
                                        path='#'
                                        onClick={handleFacebookSignup} // Trigger Facebook signup
                                    />
                                    <RegisterButton
                                        buttonName="Signup Using Google"
                                        color='#black'
                                        bgcolor='#C6FCFC'
                                        path='#'
                                        onClick={handleGoogleSignup} // Trigger Google signup
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignUp;
