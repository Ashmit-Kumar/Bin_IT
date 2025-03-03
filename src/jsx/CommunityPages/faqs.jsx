import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../css/faqs.css';
import Header from '../Commen-Components/header';
import Footer from '../Commen-Components/footer';

function Faqs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
            toast.error("Name can only contain letters and spaces!", { position: "top-right" });
            return;
        }
    
        if (name === "message" && value.length > 120) {
            toast.error("Message cannot exceed 120 characters!", { position: "top-right" });
            return;
        }
    
        // Allow updating the email field, but validate on form submission
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate email format
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            toast.error("Invalid email format!", { position: "top-right" });
            return;
        }
    
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill all fields!", { position: "top-right" });
            return;
        }
    
        try {
            const api=import.meta.env.VITE_API_KEY;
            const response = await fetch(`${api}/contact/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                toast.success("Thank you! We will contact you soon.", { position: "top-right" });
                setFormData({ name: '', email: '', message: '' });
            } else {
                const data = await response.json();
                toast.error(data.message || "Error submitting your complaint.", { position: "top-right" });
            }
        } catch (err) {
            toast.error("Error submitting the form.", { position: "top-right" });
        }
    };
    
    

    const handleReset = (e) => {
        e.preventDefault();  // ✅ Prevent unexpected behavior
        setFormData({ name: '', email: '', message: '' });
        toast.info("Form reset successfully!", { position: "top-right" });
    };

    return (
        <>
            <Header />
            <ToastContainer />  {/* ✅ Ensure ToastContainer is present */}
            
            <div className="faqs">
                <div className="faqs-header">
                    <h1 className="faq-titles">Do You Have Questions?</h1>
                    <h2 className="faq-co-title">We have answers (well, most of the time 😜)</h2>
                    <h3 className="faq-here-u-go">
                        Below you’ll find answers to the most common questions you may have on BinIT. Also, please feel free to check out our
                        <a href=""> Facebook</a> & <a href=""> Twitter</a> Pages. If you still can’t find the answer you’re looking for, just 
                        <a href="#contact-area"> Contact us!</a>
                    </h3>
                    <img src="/faqs-img/faq-img-1.png" alt="Confused-Image" />
                </div>

                {/* <div className="faqs-main">
                    <div className="faqs-ques">
                        <h1 className="faq-titles">Frequently Asked Questions (FAQs)</h1>
                        <div className="faqs-ques-link">
                            <FaqQues no='1' ques="How to register as a User?" />
                            <FaqQues no='2' ques="How to Login?" />
                            <FaqQues no='3' ques="How you can donate?" />
                            <FaqQues no='4' ques="How to register as an NGO?" />
                            <FaqQues no='5' ques="Thank you (this one is a placeholder 😂)" />
                        </div>
                    </div>
                </div> */}

                <div className="contact" id='contact-area'>
                    <div className="contact-top">
                        <h1 className="contact-titles">CONTACT US</h1>
                        <h3 className="contact-here-u-go">
                            You can contact us through the form below, email, or social media. We’re here to help and would love to hear from you. We’ll respond as soon as possible.
                        </h3>
                    </div>

                    <div className="contact-bottom">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="contact-input">
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>

                            <div className="contact-input">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>

                            <div className="contact-input">
                                <label>Message (Max 120 chars)</label>
                                <textarea 
                                    name="message" 
                                    placeholder="Write your query here" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    maxLength="120" 
                                    required
                                ></textarea>
                            </div>

                            <div className="submit-btns">
                                <button type="submit" style={{ backgroundColor: "#000", color: "white", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>
                                    Submit
                                </button>
                                <button type="button" onClick={handleReset} style={{ backgroundColor: "#000", color: "white", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>
                                    Reset
                                </button>
                            </div>
                        </form>
                        <img src="/faqs-img/faq-img-2.png" alt="Contact-Image" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Faqs;
