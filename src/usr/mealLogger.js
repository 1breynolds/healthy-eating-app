import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLog = { meal, calories };
        setLog([...log, newLog]);
        setMeal('');
        setCalories('');
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
                        <Link to="/user-home">
                            <button type="button" className="cancel-button">Cancel</button>
                        </Link>
                </div>
            </form>
            <div className="result">
                <h2>Meal Log</h2>
                <ul>
                    {log.map((entry, index) => (
                        <li key={index}>
                            <strong>{entry.meal}</strong> - {entry.calories} calories
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MealLogger;