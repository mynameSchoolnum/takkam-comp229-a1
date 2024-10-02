import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './ContactMe.css'; 

function ContactMe() {
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault(); 

    navigate('/');
  };

  return (
    <div className="contact-me-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}> 
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactMe;
