import React from 'react';
import VideoPlayer from './VideoPlayer';
import ConfirmedDemo from './videos/ConfirmedDemo.mp4';

function Projects() {
    return (
        <div className="Projects">
            <h1>Demo Projects</h1>

            <VideoPlayer
                src={ConfirmedDemo}
                title='Confirmed Project Demo'
            />
        </div>
    )
}

export default Projects