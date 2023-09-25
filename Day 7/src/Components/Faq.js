import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-header">
        <Link to="/loginbtn" className="back-link">
          <div className="continue-btn">Back</div>
        </Link>
        <h1 className="faq-title">Frequently Asked Questions (FAQ)</h1>
      </div>
      <div className="faq-content">
        <ol className="faq-list">
          <li className="faq-item">
            <strong className="faq-question">
              How can I book a flight ticket online?
            </strong>
            <p className="faq-answer">
              To book a flight ticket online, visit our website and follow these steps:
              <ol className="sub-list">
                <li>Enter your departure and arrival locations.</li>
                <li>Select your travel dates.</li>
                <li>Choose the number of passengers and their details.</li>
                <li>Browse available flights and select your preferred one.</li>
                <li>
                  Review your booking, add any extras if needed, and proceed to payment.
                </li>
                <li>
                  Make a secure online payment to confirm your booking.
                </li>
              </ol>
            </p>
          </li>
          <li className="faq-item">
            <strong className="faq-question">
              Can I book a flight ticket for someone else?
            </strong>
            <p className="faq-answer">
              Yes, you can book a flight ticket for someone else. During the booking process, you'll have the option to enter the passenger's details, including their name and contact information.
            </p>
          </li>
          <li className="faq-item">
            <strong className="faq-question">
              What payment methods are accepted for booking flights?
            </strong>
            <p className="faq-answer">
              We accept a variety of payment methods, including credit cards, debit cards, and online payment platforms. Please check the payment options available on our website during the booking process.
            </p>
          </li>
         
        </ol>
      </div>
    </div>
  );
};

export default Faq;
