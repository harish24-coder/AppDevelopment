import React from 'react';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/flights">Flights</a></li>
          <li><a href="/bookings">My Bookings</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </div>

      
      <div className="main-content">
        <h1>Welcome to Flight Booking Dashboard</h1>
        <p>Manage your flights and bookings here.</p>

        
      </div>
    </div>
  );
};

export default Dashboard;
