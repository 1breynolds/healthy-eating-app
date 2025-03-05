import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

const ProjectForm = () => {
    return (
        <div className="container">
            <h1>Healthy Eating App</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to the Healthy Eating App. Please log in or sign up to start logging your meals.</p>
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