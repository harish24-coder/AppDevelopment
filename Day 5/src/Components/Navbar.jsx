import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

function Navbar() {
  return (
    <div className="navbar">
    <Header/>
    <Sidebar/>
    <Footer/>
    </div>
  );
}

export default Navbar;