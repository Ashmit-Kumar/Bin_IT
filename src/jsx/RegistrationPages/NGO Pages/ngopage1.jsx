import React from 'react';
import "../../../css/ngo.css"

function NgoPage1() {
    const moveToNext = (currentInput, nextInputId) => {
        const maxLength = parseInt(currentInput.getAttribute('maxlength'));
        const currentLength = currentInput.value.length;

        if (currentLength === maxLength) {
            if (nextInputId) {
                const nextInput = document.getElementById(nextInputId);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    // Function to handle OTP verification (currently a placeholder)
    const navigateToNextPage = () => {
        console.log('OTP Verified and navigate to Home!');
        navigate('/ngo-page-2');
    };

    return (
        <div className="ngo-reg-container">
            <form action="">
                <label htmlFor="email">
                    Email:
                    <input type="text" id="email" />
                </label>
                <button type="button" className="ngo-verify-email">Verify</button>
            </form>

            <form action="">
                <div className="otp-container">
                    <input type="text" maxLength="1" className="otp-box" id="otp1" onInput={(e) => moveToNext(e.target, 'otp2')} required />
                    <input type="text" maxLength="1" className="otp-box" id="otp2" onInput={(e) => moveToNext(e.target, 'otp3')} required />
                    <input type="text" maxLength="1" className="otp-box" id="otp3" onInput={(e) => moveToNext(e.target, 'otp4')} required />
                    <input type="text" maxLength="1" className="otp-box" id="otp4" onInput={(e) => moveToNext(e.target, 'otp5')} required />
                    <input type="text" maxLength="1" className="otp-box" id="otp5" onInput={(e) => moveToNext(e.target, 'otp6')} required />
                    <input type="text" maxLength="1" className="otp-box" id="otp6" onInput={(e) => moveToNext(e.target)} required />
                    <button type="button" className="bubbly-button1" onClick={navigateToNextPage}>Verify OTP</button>
                </div>
            </form>
        </div>
    );
}

export default NgoPage1;