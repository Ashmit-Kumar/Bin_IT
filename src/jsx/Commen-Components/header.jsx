import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/header.css'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        // Check if user is logged in by checking localStorage
        const user = localStorage.getItem('user');
        if (user) {
            setIsLoggedIn(true); // User is logged in
        } else {
            setIsLoggedIn(false); // User is not logged in
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove user from localStorage
        setIsLoggedIn(false); // Update login status
        navigate('/home'); // Redirect to login page
    };

    return (
        <>
            <header>
                <div className="logo">
                    <div className="logo-text">
                        <h1>BinIt</h1>
                        <h2>Don't See It, Just BinIT</h2>
                    </div>
                    <img src="/BinIT-logo.png" alt="BinIT-Logo" />
                </div>
                <div className="burger" onClick={toggleMobileMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <nav className={isMobileMenuOpen ? 'nav-active' : ''}>
                    <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li className="dropdown">
                            <Link to="/submit-report">Report</Link>
                            {/* <div className="dropdown-content">
                                <li><Link to="/submit-report">Reports on Map</Link></li>
                                <li><Link to="#">Image Analysis</Link></li>
                            </div> */}
                        </li>
                        {/* <li className="dropdown">
                            <Link to="#">Community</Link>
                            <div className="dropdown-content">
                                <li><Link to="#">Feed</Link></li>
                                <li><Link to="#">Group</Link></li>
                                <li><Link to="/events">Events</Link></li>
                            </div>
                        </li> */}
                        <li><Link to="/news">News</Link></li>
                        <div className="user-register-btn">
                            {!isLoggedIn ? (
                                <>
                                    <li><Link to="/login"><button className='login-button'>Login</button></Link></li>
                                    <li><Link to='/signup'><button className='signup-button'>SignUp</button></Link></li>
                                </>
                            ) : (
                                <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
                            )}
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;