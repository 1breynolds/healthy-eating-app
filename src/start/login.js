import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { username, password });
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            console.log(response.data);
            navigate('/user-home');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('Invalid username or password');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
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
                {error && <p className="error">{error}</p>}
                <div className="button-container">
                    <button type="submit">Login</button>
                    <Link to="/">
                        <button type="button" className="cancel-button">Cancel</button>
                    </Link>
                </div>
            </form>
            <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
        </div>
    );
};

export default Login;