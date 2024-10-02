import React from 'react';
import './Services.css'; 

import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.webp';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.jpg';
import service5 from '../assets/service5.png';
import service6 from '../assets/service6.png';

function Services() {
  return (
    <div className="services-container">
      <h1>Services</h1>
      <div className="services-grid">
        <div className="service-box">
          <img src={service1} alt="Service 1" className="service-image" />
          <p className="service-description">SQL</p>
        </div>
        <div className="service-box">
          <img src={service2} alt="Service 2" className="service-image" />
          <p className="service-description">HTML</p>
        </div>
        <div className="service-box">
          <img src={service3} alt="Service 3" className="service-image" />
          <p className="service-description">CSS</p>
        </div>
        <div className="service-box">
          <img src={service4} alt="Service 4" className="service-image" />
          <p className="service-description">Javascript</p>
        </div>
        <div className="service-box">
          <img src={service5} alt="Service 5" className="service-image" />
          <p className="service-description">Node</p>
        </div>
        <div className="service-box">
          <img src={service6} alt="Service 6" className="service-image" />
          <p className="service-description">React App</p>
        </div>
      </div>
    </div>
  );
}

export default Services;