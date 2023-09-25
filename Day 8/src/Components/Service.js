import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className='loginbtn'>
      <h2>
        <Link to='/loginbtn'>
          <div className="continue-btn">Back</div>
        </Link>
      </h2>
      <div className="hero">
        <div className="card text-bg-dark-black border-0">
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-5 fw-bolder mb-0">FLIGHT</h5><br />
              <p className="card-text lead fs-2">
                help
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
