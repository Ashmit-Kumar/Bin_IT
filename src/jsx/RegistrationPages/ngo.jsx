import React, { useState } from "react";
import axios from "axios";
import "../../css/ngo.css";
import Header from '../Commen-Components/header';

function Ngo() {
    const [formData, setFormData] = useState({
        name: '',
        registrationNumber: '',
        address: '',
        contact: '',
        website: '',
        establishedYear: '',
        missionStatement: '',
        areaOfWork: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiKey = import.meta.env.VITE_API_KEY; // Accessing the API key from the .env file

        try {
            const response = await axios.post(
                `${apiKey}/ngo`, 
                formData, 
                {
                    headers: {
                        'Authorization': `Bearer ${apiKey}` // Sending the API key in the header
                    }
                }
            );

            if (response.status === 200) {
                alert("NGO registered successfully!");
                setFormData({
                    name: '',
                    registrationNumber: '',
                    address: '',
                    contact: '',
                    website: '',
                    establishedYear: '',
                    missionStatement: '',
                    areaOfWork: ''
                });
            }
        } catch (error) {
            console.error("There was an error registering the NGO:", error);
            alert("Failed to register NGO. Please try again.");
        }
    };

    return (
        <>
            <Header />
            <div className="ngo-register">
                <form onSubmit={handleSubmit} className="ngo-register-form">
                    <div className="ngo-register-form-container">
                        <div className="ngo-register-form-left">
                            <label htmlFor="ngoName" className="ngo-register-tags">
                                <span>NGO Name</span>
                                <input
                                    type="text"
                                    id="ngoName"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="registrationNumber" className="ngo-register-tags">
                                <span>Registration Number</span>
                                <input
                                    type="text"
                                    id="registrationNumber"
                                    name="registrationNumber"
                                    value={formData.registrationNumber}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="location" className="ngo-register-tags">
                                <span>address</span>
                                <input
                                    type="text"
                                    id="location"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="contact" className="ngo-register-tags">
                                <span>Contact</span>
                                <input
                                    type="text"
                                    id="contact"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div className="ngo-register-form-right">
                            <label htmlFor="website" className="ngo-register-tags">
                                <span>Website</span>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="establishedYear" className="ngo-register-tags">
                                <span>Established Year</span>
                                <input
                                    type="text"
                                    id="establishedYear"
                                    name="establishedYear"
                                    value={formData.establishedYear}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="missionStatement" className="ngo-register-tags">
                                <span>Mission Statement</span>
                                <input
                                    type="text"
                                    id="missionStatement"
                                    name="missionStatement"
                                    value={formData.missionStatement}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="areaOfWork" className="ngo-register-tags">
                                <span>Area of Work</span>
                                <input
                                    type="text"
                                    id="areaOfWork"
                                    name="areaOfWork"
                                    value={formData.areaOfWork}
                                    onChange={handleChange}
                                />
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







// import React from "react";
// import "../../css/ngo.css"

// import Header from '../Commen-Components/header'

// function Ngo() {
//     return (
//         <>
//             <Header />
//             <div className="ngo-register">
//                 <form action="" className="ngo-register-form">
//                     <div className="ngo-register-form-container">
//                         <div className="ngo-register-form-left">
//                             <label htmlFor="" className="ngo-register-tags">
//                                 <span>NGO Name</span>
//                                 <input type="text" />
//                             </label>
//                             <label htmlFor="" className="ngo-register-tags">
//                                 <span>Registration Number</span>
//                                 <input type="text" />
//                             </label>
//                             <label htmlFor="" className="ngo-register-tags">
//                                 <span>Location</span>
//                                 <input type="text" />
//                             </label>
//                             <label htmlFor="" className="ngo-register-tags">
//                                 <span>Contact</span>
//                                 <input type="text" />
//                             </label>
//                         </div>

//                         <div className="ngo-register-form-right">
//                             <label htmlFor="" className="ngo-register-tags">
//                                 <span>Website</span>
//                                 <input type="text" />
//                             </label>
//                             <label htmlFor="" className="ngo-register-tags">
//                                 <span>Extablished Year</span>
//                                 <input type="text" />
//                             </label>
//                             <label htmlFor="" className="ngo-register-tags">
//                                 <span>Mission Statement</span>
//                                 <input type="text" />
//                             </label>
//                             <label htmlFor="" className="ngo-register-tags">
//                                 <span>Area of Work</span>
//                                 <input type="text" />
//                             </label>
//                         </div>
//                     </div>
//                     <button>Register</button>
//                 </form>
//             </div>
//         </>
//     );
// }

// export default Ngo;