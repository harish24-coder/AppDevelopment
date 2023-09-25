import React from 'react';
import './Homepage.css'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        <h1>Welcome to Online Flight Ticket Booking</h1>
        <p>Book your flights with ease!</p>
      </header>

      <section className="featured-flights">
        <h2>Featured Flights</h2>
        <div className="flight-card">
          <img src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlnJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Flight 1" />
          <h3>Flight Name</h3>
          <p>Price: $XXX</p>
        </div>
        <div className="flight-card">
          <img src="https://images.unsplash.com/photo-1515963665762-77ef90e624fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlnJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Flight 2" />
          <h3>Flight Name</h3>
          <p>Price: $XXX</p>
        </div>
      </section>

      <section className="search-flights">
        <h2>Search Flights</h2>
        <p>Find your next adventure in the skies!</p>
        <Link to="/search-flights">
         <button className="search-button">Search Flights</button>
        </Link>
      </section>

      <section className="testimonials">
        <h2>What our customers say</h2>
       
        <div className="testimonial">
          <p>"I had an excellent experience booking my recent flight."</p>
          <p>- Ragav</p>
        </div>
        <div className="testimonial">
          <p>" I was able to find the best deals quickly."</p>
          <p>- Harish</p>
        </div>
        
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Privacy policy</h3>
            <p>Information We Collect<br />How We Use Your Information<br />Security</p>
          </div>

          <div className="footer-section">
            <h3>Address</h3>
            <p>123 Main Street<br />City, State<br />Postal Code</p>
          </div>
          <div className="footer-section">
            <h3>Social Media</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
              <a href="https://www.instagram.com/_.its_me_harish._/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Email: example@example.com<br />Phone: +1 (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h3>Terms & conditions</h3>
            <p>Booking Agreement<br />Booking Process<br />Pricing and Payment</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
