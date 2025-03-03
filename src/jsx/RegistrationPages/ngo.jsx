import React, { useState } from "react";
import "../../css/ngo.css";
import Header from "../Commen-Components/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Ngo() {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        registrationNumber: "",
        location: "",
        contact: "",
        website: "",
        establishedYear: "",
        missionStatement: "", // ✅ Use missionStatement instead of mission
        areaOfWork: "",
    });
    
    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "NGO Name is required.";
        if (!formData.registrationNumber) newErrors.registrationNumber = "Registration Number is required.";
        if (!formData.location) newErrors.location = "Location is required.";
        // if (!formData.contact || !/^\d{10}$/.test(formData.contact))
        //     newErrors.contact = "Enter a valid 10-digit contact number.";
        if (!formData.website || !/^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/.test(formData.website))
            newErrors.website = "Enter a valid website URL (https://example.com).";
        if (!formData.establishedYear || !/^\d{4}$/.test(formData.establishedYear))
            newErrors.establishedYear = "Enter a valid year (e.g., 2005).";
        if (!formData.missionStatement) newErrors.missionStatement = "Mission Statement is required."; // ✅ Corrected key
        if (!formData.areaOfWork) newErrors.areaOfWork = "Area of Work is required.";
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validateForm()) {
            toast.error("Please correct the errors before submitting.");
            return;
        }
    
        const apiKey = import.meta.env.VITE_API_KEY; 
    
        try {
            const response = await axios.post(
                `${apiKey}/ngo`, 
                formData, 
                {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                }
            );
    
            if (response.status === 200 || response.status === 201) {
                toast.success("NGO registered successfully!");
                // console.log("Form submitted:", formData);
    
                setFormData({
                    name: '',
                    registrationNumber: '',
                    location: '',
                    contact: '',
                    website: '',
                    establishedYear: '',
                    mission: '',
                    areaOfWork: ''
                });
            }
        } catch (error) {
            console.error("There was an error registering the NGO:", error);
            toast.error("Failed to register NGO. Please try again.");
        }
    };
    
    return (
        <>
            <Header />
            <ToastContainer position="top-center" autoClose={3000} />
            <div className="ngo-register">
                <form onSubmit={handleSubmit} className="ngo-register-form">
                    <div className="ngo-register-form-container">
                        <div className="ngo-register-form-left">
                            <label className="ngo-register-tags">
                                <span>NGO Name</span>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                                {errors.name && <p className="error-text">{errors.name}</p>}
                            </label>

                            <label className="ngo-register-tags">
                                <span>Registration Number</span>
                                <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} />
                                {errors.registrationNumber && <p className="error-text">{errors.registrationNumber}</p>}
                            </label>

                            <label className="ngo-register-tags">
                                <span>Location</span>
                                <input type="text" name="location" value={formData.location} onChange={handleChange} />
                                {errors.location && <p className="error-text">{errors.location}</p>}
                            </label>

                            <label className="ngo-register-tags">
                                <span>Contact</span>
                                <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
                                {errors.contact && <p className="error-text">{errors.contact}</p>}
                            </label>
                        </div>

                        <div className="ngo-register-form-right">
                            <label className="ngo-register-tags">
                                <span>Website</span>
                                <input type="text" name="website" value={formData.website} onChange={handleChange} />
                                {errors.website && <p className="error-text">{errors.website}</p>}
                            </label>

                            <label className="ngo-register-tags">
                                <span>Established Year</span>
                                <input type="text" name="establishedYear" value={formData.establishedYear} onChange={handleChange} />
                                {errors.establishedYear && <p className="error-text">{errors.establishedYear}</p>}
                            </label>

                            <label className="ngo-register-tags">
                                <span>Mission Statement</span>
                                <input 
                                    type="text" 
                                    name="missionStatement"  // ✅ Ensure it matches formData key
                                    value={formData.missionStatement} 
                                    onChange={handleChange} 
                                />
                                {errors.missionStatement && <p className="error-text">{errors.missionStatement}</p>}
                            </label>

                            <label className="ngo-register-tags">
                                <span>Area of Work</span>
                                <input type="text" name="areaOfWork" value={formData.areaOfWork} onChange={handleChange} />
                                {errors.areaOfWork && <p className="error-text">{errors.areaOfWork}</p>}
                            </label>
                        </div>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    );
}

export default Ngo;