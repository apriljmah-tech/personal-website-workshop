import React from "react";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            name: "Personal Portfolio Website",
            description: "responsive Website to show skills.",
            tech: "react, CSS, router",
            link: "https://github.com"
        },
        {
            name: "Weather App",
            description: "responsive Website to show skills.",
            tech: "react, CSS, router",
            link: "https://github.com"
        },
        {
            name: "News App",
            description: "responsive Website to show skills.",
            tech: "react, CSS, router",
            link: "https://github.com"
        }
    ];
    
    return(
       <div className="projects-container">
           <div className="projects-content">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2><strong>{project.name}</strong></h2>
                        <p>{project.description}</p>
                        <p className="tech"><em>{project.tech}</em></p>
                        {project.link && (
                            <a
                                href={project.link}
                                target="blank"
                                rel="noopener noreferrer"
                                className="github-link"
                            >
                                View on GitHub
                            </a>
                        )}
                    </div>
                ))}
           </div>
        </div>
    );
};

export default Projects;