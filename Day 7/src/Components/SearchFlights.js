import React, { useState } from 'react';
import './SearchFlights.css';

const SearchFlights = () => {
  const [formData, setFormData] = useState({
    departureLocation: '',
    destinationLocation: '',
    departureDate: '',
    returnDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can implement flight search logic here based on the formData
    alert(
      `Searching for flights from ${formData.departureLocation} to ${formData.destinationLocation} on ${formData.departureDate}.`
    );
  };

  return (
    <div className="search-flights-container">
      <h1>Flight Booking</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="departureLocation">Departure Location:</label>
          <input
            type="text"
            id="departureLocation"
            name="departureLocation"
            value={formData.departureLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="destinationLocation">Destination Location:</label>
          <input
            type="text"
            id="destinationLocation"
            name="destinationLocation"
            value={formData.destinationLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureDate">Departure Date:</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="returnDate">Return Date:</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Search Flights</button>
      </form>
    </div>
  );
};

export default SearchFlights;
