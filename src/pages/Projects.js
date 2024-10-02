import React from 'react';
import './Projects.css'; // Import the CSS for styling

// Import your project images
import project1Image from '../assets/project1.jpeg';  // Adjust the path accordingly
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        
        <div className="project-card">
          <img src={project1Image} alt="Project 1" className="project-image" />
          <h2>Pokemon Card</h2>
          <p>Using JSON to dynamically load data into an HTML page.</p>
          <a href="/Project1/index.html" className="project-button">View Project</a>
        </div>

        <div className="project-card">
          <img src={project2Image} alt="Project 2" className="project-image" />
          <h2>Words Guess</h2>
          <p>Using a loop to verify if the user entered the correct words.</p>
          <a href="/Project2/index.html" className="project-button">View Project</a>
        </div>

        <div className="project-card">
          <img src={project3Image} alt="Project 3" className="project-image" />
          <h2>Story Generater</h2>
          <p>Capturing user input, storing it, and reusing it later in the code.</p>
          <a href="/Project3/COMP125A1.html" className="project-button">View Project</a>
        </div>

      </div>
    </div>
  );
}

export default Projects;
