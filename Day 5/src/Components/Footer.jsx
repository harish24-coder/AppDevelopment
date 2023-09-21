import React from 'react';
import '../Assests/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Address</h3>
          <p>26 Supreme Street<br />Coimbatore, Tamilnadu<br />629001</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="o">
              <FacebookIcon />
            </a>
            <a href="o">
              <TwitterIcon />
            </a>
            <a href="o">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: harishragav24@gmail.com<br />Phone: 8825951726 (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;