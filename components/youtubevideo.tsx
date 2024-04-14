import React from 'react';

// Define props for the YouTubeVideo component
interface YouTubeVideoProps {
    videoId: string;  // Each instance of YouTubeVideo can have a different videoId
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default YouTubeVideo;
