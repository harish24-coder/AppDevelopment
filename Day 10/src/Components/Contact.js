import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Contact.css';

const Contact = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('Feedback:', feedback);
    console.log('Email:', email);

    setFeedback('');
    setEmail('');
  };

  return (
    <div className="loginbtn">
      <h2>
        <Link to="/loginbtn">
          <div className="continue-btn">Back</div>
        </Link>
      </h2>
      <div style={{ float: 'right', width: '50%' }}>
        <h2>Contact Us</h2>
        <p>
          If you have any questions, concerns, or feedback, feel free to get in
          touch with our customer support team. We're here to assist you in
          making your travel experience as smooth as possible.
        </p>

        <h2>Contact Information</h2>
        <p>
          <strong>Customer Support Email:</strong><br />
          Email: support@example.com
        </p>
        <p>
          <strong>Customer Support Phone:</strong><br />
          Phone: +1 (123) 456-7890
        </p>
        <p>
          <strong>Mailing Address:</strong><br />
          123 Main Street<br />
          City, State<br />
          Postal Code
        </p>

        <h2>Send Us Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
