import React from "react";
import "../../css/ngo.css"

import Header from '../Commen-Components/header'

function Ngo() {
    return (
        <>
            <Header />
            <div className="ngo-register">
                <form action="" className="ngo-register-form">
                    <div className="ngo-register-form-container">
                        <div className="ngo-register-form-left">
                            <label htmlFor="" className="ngo-register-tags">
                                <span>NGO Name</span>
                                <input type="text" />
                            </label>
                            <label htmlFor="" className="ngo-register-tags">
                                <span>Registration Number</span>
                                <input type="text" />
                            </label>
                            <label htmlFor="" className="ngo-register-tags">
                                <span>Location</span>
                                <input type="text" />
                            </label>
                            <label htmlFor="" className="ngo-register-tags">
                                <span>Contact</span>
                                <input type="text" />
                            </label>
                        </div>

                        <div className="ngo-register-form-right">
                            <label htmlFor="" className="ngo-register-tags">
                                <span>Website</span>
                                <input type="text" />
                            </label>
                            <label htmlFor="" className="ngo-register-tags">
                                <span>Extablished Year</span>
                                <input type="text" />
                            </label>
                            <label htmlFor="" className="ngo-register-tags">
                                <span>Mission Statement</span>
                                <input type="text" />
                            </label>
                            <label htmlFor="" className="ngo-register-tags">
                                <span>Area of Work</span>
                                <input type="text" />
                            </label>
                        </div>
                    </div>
                    <button>Register</button>
                </form>
            </div>
        </>
    );
}

export default Ngo;