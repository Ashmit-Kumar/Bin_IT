import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/footer.css";

function Footer() {
    return (
        <footer>
            <div className="bg">
                <img src="/footer-bg.png" alt="Footer Background" />
            </div>
            <div className="footer-columns">
                {/* Logo Section */}
                <section className="footer-logo">
                    <div className="logo-main">
                        <h1>BinIT</h1>
                        <img src="/BinIT-logo.png" alt="BinIT Logo" />
                    </div>
                    <h3>Don't See It, Just BinIT</h3>
                    <span className="social-links">
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
                            <img src="/youtube.svg" alt="YouTube" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <img src="/instagram.svg" alt="Instagram" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                            <img src="/twitter.svg" alt="Twitter" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <img src="/github.svg" alt="GitHub" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            <img src="/linkedin.svg" alt="LinkedIn" />
                        </a>
                    </span>
                </section>

                {/* Information Section */}
                <section className="footer-right">
                    <h3>Information</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/reports">Your Reports</Link></li>
                        <li><Link to="/news">News</Link></li>
                    </ul>
                </section>

                {/* Help Center Section */}
                <section className="footer-right">
                    <h3>Help Center</h3>
                    <ul>
                        <li><Link to="/ngo-registration">NGO Registration</Link></li>
                        <li><Link to="/faqs">FAQs</Link></li>
                    </ul>
                </section>

                {/* Legal Section */}
                <section className="footer-right">
                    <h3>Legal</h3>
                    <ul>
                        <li><Link to="/cookies-policy">Cookies Policy</Link></li>
                        <li><Link to="/copyright">Copyright</Link></li>
                        <li><Link to="/terms-of-use">Terms of Use</Link></li>
                    </ul>
                </section>
                <section className="footer-right"></section>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <small>Copyright &copy; <span>{new Date().getFullYear()}</span> BINiT. All rights reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;
