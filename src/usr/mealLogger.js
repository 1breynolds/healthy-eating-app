import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const MealLogger = () => {
    const [meal, setMeal] = useState('');
    const [calories, setCalories] = useState('');
    const [log, setLog] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            navigate('/login');
        } else {
            const userLog = JSON.parse(localStorage.getItem('userLog')) || {};
            if (userLog[currentUser.username]) {
                setLog(userLog[currentUser.username]);
            }
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLog = { meal, calories };
        setLog([...log, newLog]);
        setMeal('');
        setCalories('');
    };

    const handleFinalSubmit = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            const userLog = JSON.parse(localStorage.getItem('userLog')) || {};
            userLog[currentUser.username] = log;
            localStorage.setItem('userLog', JSON.stringify(userLog));
            navigate('/user-home');
        }
    };

    const handleCancel = () => {
        navigate('/user-home');
    };

    const handleRemove = (index) => {
        const newLog = log.filter((_, i) => i !== index);
        setLog(newLog);

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            const userLog = JSON.parse(localStorage.getItem('userLog')) || {};
            userLog[currentUser.username] = newLog;
            localStorage.setItem('userLog', JSON.stringify(userLog));
        }
    };

    return (
        <div className="container">
            <h1>Log Your Meal</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={meal}
                    onChange={(e) => setMeal(e.target.value)}
                    placeholder="Meal"
                />
                <input
                    type="number"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    placeholder="Calories"
                />
                <div className="button-container">
                    <button type="submit">Add Meal</button>
                </div>
            </form>
            <div className="result">
                <h2>Meal Log</h2>
                <ul>
                    {log.map((entry, index) => (
                        <li key={index}>
                            <strong>{entry.meal}</strong> - {entry.calories} calories
                            <button
                                className="remove-button"
                                onClick={() => handleRemove(index)}
                            >
                                &#10060;
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="button-container">
                    <button type="button" onClick={handleFinalSubmit}>Submit</button>
                    <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default MealLogger;