import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Assests/Header.css';

function Header() {
  return (
    <div className="header">
        <div className="logo">
          <h1>Online Flight Ticket Booking</h1>
        </div>
        <div className="actions">
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </div>
    </div>
  );
}

export default Header;