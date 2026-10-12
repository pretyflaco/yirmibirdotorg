import React from 'react';

interface YouTubeVideoProps {
    videoId: string;
    title?: string;
}

// Responsive 16:9 embed. youtube-nocookie.com: no YouTube cookies until the visitor presses play.
const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, title }) => {
    return (
        <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", height: 0 }}>
            <iframe
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title={title || "YouTube video player"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default YouTubeVideo;
