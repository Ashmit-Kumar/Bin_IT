import { React } from 'react';
import { Link } from 'react-router-dom';
import "../../css/footer.css"

function Footer() {
    return (
        <>
            <footer>
                <div className="bg">
                    <img src="/footer-bg.png" alt="" />
                </div>
                <div className="footer-columns">
                    <section className="footer-logo">
                        <div className="logo-main">
                            <h1>BinIT</h1>
                            <img src="/BinIT-logo.png" alt="BinIT-Logo" />
                        </div>
                        <h3>Don't See It, Just BinIT</h3>
                        <span className='social-links'>
                            <a href="#" title="Youtube">
                                <img src="/youtube.svg" alt='YouTube' />
                            </a>
                            <a href="#" title="Instagram">
                                <img src="/instagram.svg" alt='Instagram' />
                            </a>
                            <a href="#" title="Twitter">
                                <img src="/twitter.svg" alt='Twitter' />
                            </a>
                            <a href="#" title="GitHub">
                                <img src="/facebook.svg" alt='Facebook' />
                            </a>
                            <a href="#" title="Linkedin">
                                <img src="/linkedin.svg" alt='Linkedin' />
                            </a>
                        </span>
                    </section>
                    <section className="footer-right">
                        <h3>Information</h3>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Your Reports</a>
                            </li>
                            <li>
                                <a href="#">News</a>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-right">
                        <h3>Content</h3>
                        <ul>
                            <li>
                                <a href="#">Community</a>
                            </li>
                            <li>
                                <Link to="/create-event">Create Event</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-right">
                        <h3>Help Center</h3>
                        <ul>
                            <li>
                                <Link to="/ngo-registration">NGO Registration</Link>
                            </li>
                            <li>
                                <Link to="/faqs">FAQs</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-right">
                        <h3>Legal</h3>
                        <ul>
                            <li>
                                <a href="#">Cookies Police</a>
                            </li>
                            <li>
                                <a href="#">Copyright</a>
                            </li>
                            <li>
                                <a href="#">Term Of Use</a>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="footer-bottom">
                    <small>Copyright &copy;<span id="year"> 2024 </span>BINiT. All rights reserved</small>
                </div>
            </footer>
        </>
    )
}

export default Footer;