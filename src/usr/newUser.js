import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const NewUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser) {
            currentUser.firstName = firstName;
            currentUser.lastName = lastName;
            currentUser.height = height;
            currentUser.weight = weight;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            navigate('/user-home');
        } else {
            console.error("No current user found in local storage")
        }
    };

    const handleCancel = () => {
        navigate('/user-home');
    };

    return (
        <div className="container">
            <h1>Enter Your Details</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                />
                <input
                    type="text"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Height"
                />
                <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Weight"
                />
                <div className="button-container">
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default NewUser;