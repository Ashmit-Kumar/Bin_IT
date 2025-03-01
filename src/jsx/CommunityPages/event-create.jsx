import "../../css/event-create.css";
import React, { useState, useEffect } from 'react';
import Header from "../Commen-Components/header";

function EventCreate() {
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        phone: '',
        email: '',
        eventName: '',
        dateTime: '',
        address: '',
        purpose: ''
    });
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const allFilled = Object.values(inputs).every(input => input !== '');
        setIsButtonDisabled(!allFilled);
    }, [inputs]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const submitData = async (e) => {
        e.preventDefault();
        const { firstName, lastName, gender, phone, email, eventName, dateTime, address, purpose } = inputs;

        try {
            const res = await fetch(
                'https://binit-8abd9-default-rtdb.firebaseio.com/createEventData.json', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    gender,
                    phone,
                    email,
                    eventName,
                    dateTime,
                    address,
                    purpose
                })
            });

            console.log('Response received:', res);
            if (res.ok) {
                setInputs({
                    firstName: '',
                    lastName: '',
                    gender: '',
                    phone: '',
                    email: '',
                    eventName: '',
                    dateTime: '',
                    address: '',
                    purpose: ''
                });
                alert("Event Created! Thank You");
            } else {
                alert("Failed to create event. Please try again.");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <>
        <Header />
        <main>
            <div className="create-bg">
                <div className="create">
                    <div className="create-header">
                        Event
                    </div>
                    <form method="post" className="create-form" onSubmit={submitData}>
                        <div className="admin-details">
                            <h1>Admin Details</h1>
                            <div className="admin-name">
                                <label>
                                    First Name
                                    <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} />
                                </label>
                                <label>
                                    Last Name
                                    <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} />
                                </label>
                            </div>
                            <div className="admin-gender">
                                <label>
                                    Gender
                                    <div className="gender-radio">
                                        <div className="radio">
                                            <input type="radio" name="gender" value="male" onChange={handleChange} />
                                            Male
                                        </div>
                                        <div className="radio">
                                            <input type="radio" name="gender" value="female" onChange={handleChange} />
                                            Female
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="admin-contact">
                                <label>
                                    Phone no.
                                    <input type="number" name="phone" value={inputs.phone} onChange={handleChange} />
                                </label>
                                <label>
                                    Email
                                    <input type="email" name="email" value={inputs.email} onChange={handleChange} />
                                </label>
                            </div>
                        </div>
                        <div className="event-details">
                            <h1>Event Details</h1>
                            <div className="event-name-date">
                                <label>
                                    Event Name
                                    <input type="text" name="eventName" value={inputs.eventName} onChange={handleChange} />
                                </label>
                                <label>
                                    Date and Time
                                    <input type="datetime-local" name="dateTime" value={inputs.dateTime} onChange={handleChange} />
                                </label>
                            </div>
                            <label>
                                Address
                                <textarea name="address" cols="40" rows="5" value={inputs.address} onChange={handleChange}></textarea>
                            </label>
                            <label>
                                Purpose
                                <textarea name="purpose" cols="40" rows="5" value={inputs.purpose} onChange={handleChange}></textarea>
                            </label>
                        </div>
                        <button type="submit" disabled={isButtonDisabled} className="submitbtn">Submit</button>
                    </form>
                </div>
            </div>
        </main>
        </>
    );
}

export default EventCreate;
