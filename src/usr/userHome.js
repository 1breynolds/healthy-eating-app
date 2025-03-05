import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const UserHome = () => {
    const [username, setUsername] = useState('');
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            navigate('/');
        } else {
            setUsername(currentUser.username);
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
            <h2>Welcome, {username}!</h2>
            <p>What would you like to do?</p>
            <div className="button-container">
                <Link to="/log-meal">
                    <button>Log Meal</button>
                </Link>
            </div>
        </div>
    );
};

export default UserHome;