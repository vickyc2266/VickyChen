import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import './Projects.css';

const projectDetails = {
    1: {
        title: 'Confirmed Demo',
        description: 'Detailed description of the Confirmed project.',
        videoUrl: '/videos/ConfirmedDemo.mp4',
    },
    2: {
        title: 'SmartCookie Demo',
        description: "Detailed description of the SmartCookie project.",
        videoUrl: '/videos/SmartCookie.mp4'
    }
};

function ProjectDetails() {
    const { id } = useParams();
    const project = projectDetails[id];

    if (!project) {
        return <h2>Project Not Found</h2>
    }

    return (
        <div className = "project-detials">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <VideoPlayer src = {project.videoUrl} title = {project.title} />
        </div>
    );

}

export default ProjectDetails;