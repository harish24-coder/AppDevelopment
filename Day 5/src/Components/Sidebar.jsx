import React from 'react';
import '../Assests/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;