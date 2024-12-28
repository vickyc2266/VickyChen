import React from 'react';
import ReactPlayer from 'react-player';
import './Projects.css'; // Import the CSS file



function VideoPlayer({ src, title }) {
    return (
        <div className="video-container">
            <h2>{title}</h2>
            <ReactPlayer
                url={src}
                width="100%"
                height="100%"
                controls
                className="react-player" // Apply the CSS class to the ReactPlayer
            />
        </div>
    );
}

export default VideoPlayer;
