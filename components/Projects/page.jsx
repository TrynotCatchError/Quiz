// src/components/Projects.jsx
import React from 'react';
import './projects.css';

const projects = [
  {
    id: 1,
    title: ' Calcutor App ',
    description: 'Reactjs + Description Project ',
    imageUrl: '/cal.png',
    link: ''
  },
  {
    id: 2,
    title: 'Basic Landing page ',
    description: 'React js with simple landingpage',
    imageUrl: '/cal.png',
    link: '#'
  },
  {
    id: 3,
    title: 'E-Commerce',
    description: 'Nextjs Ecommerce projects',
    imageUrl: '/cal.png',
    link: '#'
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'This is project four description.',
    imageUrl: '/cal.png',
    link: '#'
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'This is project five description.',
    imageUrl: '/cal.png',
    link: '#'
  },
  {
    id: 6,
    title: ' Calcutor App ',
    description: 'Reactjs + Description Project ',
    imageUrl: '/cal.png',
    link: ''
  },
 
];














const Projects = () => {
  return (
    <section className="projects">
      <h2>Other Projects</h2>
      
      <div className="projects-grid">
         
        {projects.map((project) => (
          <a href={project.link} key={project.id} className="project-item" target="_blank" rel="noopener noreferrer">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
   
      </div>
    </section>
  );
};

export default Projects;
