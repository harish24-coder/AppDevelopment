import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
import './NavBar.css';
import Homepage from './Homepage';


const NavBar = () => {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className={`navnav ${menuOpen ? 'open' : ''}`}>
        <div className="containers">
          <Link to="FlightBooking" className="brand-logo">
            ONLINE FLIGHT TICKET BOOKING
          </Link>
          <ul className={`right ${menuOpen ? 'open' : ''}`}>
            <li><Link to='/service'>FAQ</Link></li>
            <li><Link to='/product'>Services</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/register">Signup</NavLink>
            </li>
            <li>
              <NavLink to="/">Login</NavLink>
            </li>
            <li>
              <NavLink to="/">LogOut</NavLink>
            </li>
          </ul>
          <div id="user">
            {' '}
            Welcome{username}
          </div>
        </div>
      </nav>
      <Homepage/>
    </div>
  );
};

export default NavBar;
