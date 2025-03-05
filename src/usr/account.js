import React, { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Account = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');       
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            navigate('/');
        } else {
            setFirstName(currentUser.firstName || '');
            setLastName(currentUser.lastName || '');
            setHeight(currentUser.height || '');
            setWeight(currentUser.weight || '');
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Update details
        currentUser.firstName = firstName;
        currentUser.lastName = lastName;
        currentUser.height = height;
        currentUser.weight = weight;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        // Update users array
        const updatedUsers = users.map(user => 
            user.username === currentUser.username ? currentUser : user
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        navigate('/user-home');
    };

    const handleCancel = () => {
        navigate('/user-home');
    };

    return (
        <div className="container">
            <h1>Edit Account Information</h1>
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
    )
};

export default Account;