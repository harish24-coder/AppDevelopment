import React, { useState } from 'react';
import './Login.css'; 
import { BrowserRouter, Routes, Route, Redirect, Link, useNavigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { useDispatch } from "react-redux";
import { login } from './Redux/userSlice';

const CONSTANT_PASSWORD = 'ragav5550';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch =useDispatch();
  const nav= useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError('Username and password are required.');
    } else if (password !== CONSTANT_PASSWORD) {
      setError('Incorrect password.');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
    } else {
      dispatch(login(username));
      nav("/loginbtn");
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  return (
    
    <div className="login-containers" body>
    
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="login-button" type="button" onClick={handleLogin}>
        Login
        </button>
        <div className='p3'>
        <p>Don't have an account?<div className='p2'><Link to="/register">Register</Link></div></p></div>
      </form>
    </div>
  
  );
}

export default Login;