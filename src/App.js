import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectForm from './start/projectForm';
import MealLogger from './usr/mealLogger';
import Login from './start/login';
import Signup from './start/signup';
import UserHome from './usr/userHome';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Healthy Eating App
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/user-home" element={<UserHome />} />
          <Route path="/log-meal" element={<MealLogger/>}/>
          <Route path="/" element={<ProjectForm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
