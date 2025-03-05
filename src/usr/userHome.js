import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const UserHome = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            navigate('/');
        } else {
            setUsername(currentUser.username);
            setFirstName(currentUser.firstName || '');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/');
    };

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <div className="container">
            <div className="dropdown-container">
                <button onClick={toggleDropdown} className="dropdown-button">
                    <FontAwesomeIcon icon={faHouse} />
                </button>
                {dropdown && (
                    <div className="dropdown-content">
                        <Link to="/account">Account</Link>
                        <Link to="/settings">Settings</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
            <h2>Welcome, {firstName || username}!</h2>
            <div className="button-container-vertical">
                <Link to="/log-meal">
                    <button>Log Meal</button>
                </Link>
                <Link to="/recipes">
                    <button>Recipes</button>
                </Link>
                <Link to="/chatbot">
                    <button>Chat</button>
                </Link>
            </div>
        </div>
    );
};

export default UserHome;