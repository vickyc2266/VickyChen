import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
    { id: 1, title: 'Confirmed Demo', description: 'A demo for Confirmed Project'},
    { id: 2, title: 'SmartCookie Demo', description: 'A demo for SmartCookie'},

];

function Projects() {
    return (
        <div className = "Projects">
            <h1>Projects Timeline</h1>
            <div className = "timeline">
                <div className = "vertical-line"></div>
                {projects
                    .slice()
                    .reverse()
                    .map((project) => (
                        <div key = {project.id} className = "timeline-item">
                            <div className = "project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <Link to={`/projects/${project.id}`}>
                                    <button className = "demo-button">Demo</button>
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
   
export default Projects;