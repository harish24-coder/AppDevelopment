import React, { useState } from 'react';
import './Register.css'; 
import { BrowserRouter, Routes, Route, Redirect, Link } from 'react-router-dom';

const CONSTANT_PASSWORD = 'ragav5550';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = () => {
  
    setErrors({
      name: '',
      email: '',
      password: '',
    });

    if (!formData.name) {
      setErrors({ ...errors, name: 'Name is required.' });
    }

    if (!formData.email) {
      setErrors({ ...errors, email: 'Email is required.' });
    } else if (!isValidEmail(formData.email)) {
      setErrors({ ...errors, email: 'Invalid email format.' });
    }

    if (!formData.password) {
      setErrors({ ...errors, password: 'Password is required.' });
    } else if (formData.password !== CONSTANT_PASSWORD) {
      setErrors({ ...errors, password: 'Password does not match.' });
    }

   
    if (!errors.name && !errors.email && !errors.password) {
      console.log('Name:', formData.name);
      console.log('Email Address:', formData.email);
      console.log('Phone Number:', formData.password);
    }
  };

  const isValidEmail = (email) => {
   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };


  return (
    <div className="container">
      <h2>SIGN UP</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <button type="button" className="submit-button" onClick={handleRegister}>
          <Link to="/loginbtn">Register</Link>
        </button>
      </form>
    </div>
  );
}

export default Register;