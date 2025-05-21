import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../App.css';

const NewUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser) {
            try {
                const response = axios.put(`http://localhost:5000/api/user/${currentUser.userId}`, {
                    firstName,
                    lastName,
                    age,
                    height,
                    weight
                });
                localStorage.setItem('currentUser', JSON.stringify(response.data));
                navigate('/user-home');
            } catch (error) {
                console.error(error);
            }
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
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                />
                <input
                    type="text"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Height: ft'in''"
                />
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Weight: lbs"
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