import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../../css/news-subs.css';

function HomeNewsSubs() {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = async (e) => {
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

        try {
            // Sending subscription data to the backend
            const api=import.meta.env.VITE_API_KEY;
            const response = await fetch(`${api}/subscribe/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }), // Send the email in the body of the POST request
            });

            if (response.ok) {
                const data = await response.json();
                toast.success(data.message || "Subscribed successfully! 🎉", { position: "top-right" });
                setEmail(""); // Reset the email field after successful subscription
            } else {
                const data = await response.json();
                toast.error(data.message || "Error subscribing. Please try again.", { position: "top-right" });
            }
        } catch (error) {
            toast.error("Error connecting to the server. Please try again.", { position: "top-right" });
        }
    };

    return (
        <>
            <ToastContainer /> {/* Ensure toast notifications appear */}

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




// import { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import '../../../css/news-subs.css';

// function HomeNewsSubs() {
//     const [email, setEmail] = useState("");

//     const handleChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handleSubscribe = (e) => {
//         e.preventDefault();

//         // Email validation regex
//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
//         if (!email) {
//             toast.error("Please enter an email address!", { position: "top-right" });
//             return;
//         }

//         if (!emailRegex.test(email)) {
//             toast.error("Invalid email format!", { position: "top-right" });
//             return;
//         }

//         toast.success("Subscribed successfully! 🎉", { position: "top-right" });

//         // Reset email field after successful subscription
//         setEmail("");
//     };

//     return (
//         <>
//             <ToastContainer /> {/* ✅ Ensures toast notifications appear */}
            
//             <div className="newsletter">
//                 <div className="info">
//                     <h1 className="title">Subscribe to our Newsletter</h1>
//                     <p className="content">
//                         Receive our weekly newsletter & updates with new events and latest news about the environment.
//                     </p>
//                 </div>
                
//                 <form className="input-group" onSubmit={handleSubscribe}>
//                     <input
//                         type="email"
//                         className="input"
//                         id="Email"
//                         name="Email"
//                         placeholder="Enter your e-mail address"
//                         autoComplete="off"
//                         value={email}
//                         onChange={handleChange}
//                         required
//                     />
//                     <button className="button--submit" type="submit">
//                         Subscribe
//                     </button>
//                 </form>
//             </div>
//         </>
//     );
// }

// export default HomeNewsSubs;
