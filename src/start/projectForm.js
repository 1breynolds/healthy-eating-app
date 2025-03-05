import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css';

const ProjectForm = () => {
    return (
        <div className="container">
            <h1>Welcome!</h1>
            <img src={logo} className="Home-logo" alt="logo" />
            <p>Please log in or sign up to start your journey.</p>
            <div className="button-container">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/sign-up">
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectForm;