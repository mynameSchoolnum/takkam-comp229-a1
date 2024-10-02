import React from 'react';
import pic1 from "../assets/apppic1.webp"
import './Home.css';  
import aboutImage from "../assets/AboutMe.png";
import projectImage from "../assets/Projects.png";
import servicesImage from "../assets/Services.png";
import contactImage from "../assets/ContactMe.png";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Home</h1>

      <div className="home-content">
        <div className="section">
          <div className="picture-box picture-1">
            <img src={pic1} alt="HomeP1" />
          </div>
          <div className="text-box text-1">
            <h3>Hi There! Welcome to My Home Page!!</h3>
            <p>Welcome to my page! I firmly believe that practice makes perfect,
               and every step forward is an opportunity to grow and improve.</p>
          </div>
        </div>

        

        <div className="textbox text-3">
          <div>
            <h1>Get to know more now!</h1>
          </div>
        </div>

        <div className="box-container">
            <div className="box">
              <img src={aboutImage} alt="About Me" className="box-image"/>
              <div className="box-content">
                <p>About Me:</p>
                <p>Learn more about my background, experience, and what inspires me.</p>
                <Link to="/about-me" className="arrow-button">&#8594;</Link>
              </div>
            </div>

            <div className="box">
              <img src={projectImage} alt="Projects" className="box-image"/>
              <div className="box-content">
                <p>Projects</p>
                <p>Explore the innovative projects I've brought to life through creativity and code.</p>
                <Link to="/projects" className="arrow-button">&#8594;</Link>
              </div>
            </div>

            <div className="box">
              <img src={servicesImage} alt="Services" className="box-image"/>
              <div className="box-content">
                <p>Services:</p>
                <p>Discover the range of services I offer to help bring your ideas to life.</p>
                <Link to="/services" className="arrow-button">&#8594;</Link>
              </div>
            </div>

            <div className="box">
              <img src={contactImage} alt="Contact Me" className="box-image"/>
              <div className="box-content">
                <p>Contact Me</p>
                <p>Get in touch! Let's collaborate and create something amazing together.</p>
                <Link to="/contact" className="arrow-button">&#8594;</Link>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

export default Home;