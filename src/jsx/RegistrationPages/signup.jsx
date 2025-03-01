import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/signup.css'
import Header from '../Commen-Components/header';
import Textbox from '../../ui/text-boxes';
import Checkbox from '../../ui/checkbox';
import RegisterButton from '../../ui/register-btn';

function SignUp() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmPass] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // Handle login logic here, e.g., send data to backend API
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
                            <form onSubmit={handleLogin} className='signup-form'>
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
                                    <Checkbox label='Creating your account and you accepting' />
                                    <Link to='#' style={{ fontSize: '1.2rem', color: 'blue' }}>Terms&Condition</Link>
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
                                    />
                                    <RegisterButton
                                        buttonName="Signup Using Google"
                                        color='#black'
                                        bgcolor='#C6FCFC'
                                        path='#'
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