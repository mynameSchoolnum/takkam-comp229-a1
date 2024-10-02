import React from 'react';
import './AboutMe.css'; 
import profilePic from '../assets/profilePic.png'; 

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="profile-picture">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="about-text">
          <h1>Tak Kam Cheng - Gavin</h1> 
          <p>
            My name is Tak Kam Cheng and I am from Hong Kong, I am a passionate software developer with a dedication to learning, innovation, and creating impactful solutions. 
            I specialize in full-stack development, UI/UX design, cloud computing, also I do know Cantonese, Chinese, English, Japenese.
          </p>
          <p>
            Outside of work, I enjoy watching movies, playing sports. My diverse interests inspire my approach to technology and design, helping me bring fresh perspectives to every project.
          </p>

        <a href="/Grey Clean Resume Photo.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">
          View My Resume
        </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
