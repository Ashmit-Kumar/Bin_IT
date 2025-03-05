import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/header.css';
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from "@clerk/clerk-react";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track localStorage login status
    const { isSignedIn, signOut } = useAuth(); // Clerk Authentication
    const navigate = useNavigate();

    // Toggle Mobile Menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Check LocalStorage for Login State
    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsLoggedIn(!!user); // Convert to boolean
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove user from localStorage
        setIsLoggedIn(false); // Update login status
        if (isSignedIn) {
            signOut(); // Clerk Logout
        }
        navigate('/'); // Redirect to home page
    };
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => document.body.classList.remove("no-scroll");
    }, [isMobileMenuOpen]);

    return (
        <>
            <header>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className="logo">
                        <div className="logo-text">
                            <h1>BinIt</h1>
                            <h2>Don't See It, Just BinIT</h2>
                        </div>
                        <img src="/BinIT-logo.png" alt="BinIT-Logo" />
                    </div>
                </Link>

                {/* Mobile Menu Toggle */}
                <div className="burger" onClick={toggleMobileMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                {/* Navigation */}
                <nav className={isMobileMenuOpen ? 'nav-active' : ''}>
                    <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/submit-report">Report</Link></li>
                        <li><Link to="/news">News</Link></li>
                    </ul>
                </nav>
                {/* Clerk Authentication */}
                <div className="user-register-btn">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="login-button">Login</button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton afterSignOutUrl="/home" />
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </SignedIn>
                </div>
            </header>
        </>
    );
}

export default Header;
