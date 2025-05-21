import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../App.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/signup', { username, password });
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            navigate('/new-user');
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username" 
                />
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" 
                />
                <input 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password" 
                />
                <div className="button-container">
                    <button type="submit">Sign Up</button>
                    <Link to="/">
                        <button type="button" className="cancel-button">Cancel</button>
                    </Link>
                </div>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Signup;