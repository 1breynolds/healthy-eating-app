import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectForm from './start/projectForm';
import MealLogger from './usr/mealLogger';
import Login from './start/login';
import Signup from './start/signup';
import UserHome from './usr/userHome';
import Account from './usr/account';
import NewUser from './usr/newUser';
import logoWhite from './assets/logo-white.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <img src={logoWhite} className="App-logo" alt="logo" />
          <header>Smart Meals</header>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/user-home" element={<UserHome />} />
          <Route path="/log-meal" element={<MealLogger/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/new-user" element={<NewUser/>}/>
          <Route path="/" element={<ProjectForm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
