import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../../css/news-subs.css';

function HomeNewsSubs() {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();

        // Email validation regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!email) {
            toast.error("Please enter an email address!", { position: "top-right" });
            return;
        }

        if (!emailRegex.test(email)) {
            toast.error("Invalid email format!", { position: "top-right" });
            return;
        }

        toast.success("Subscribed successfully! 🎉", { position: "top-right" });

        // Reset email field after successful subscription
        setEmail("");
    };

    return (
        <>
            <ToastContainer /> {/* ✅ Ensures toast notifications appear */}
            
            <div className="newsletter">
                <div className="info">
                    <h1 className="title">Subscribe to our Newsletter</h1>
                    <p className="content">
                        Receive our weekly newsletter & updates with new events and latest news about the environment.
                    </p>
                </div>
                
                <form className="input-group" onSubmit={handleSubscribe}>
                    <input
                        type="email"
                        className="input"
                        id="Email"
                        name="Email"
                        placeholder="Enter your e-mail address"
                        autoComplete="off"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                    <button className="button--submit" type="submit">
                        Subscribe
                    </button>
                </form>
            </div>
        </>
    );
}

export default HomeNewsSubs;
