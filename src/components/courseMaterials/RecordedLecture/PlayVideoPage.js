import React from 'react';
import ReactPlayer from 'react-player';

const PlayVideoPage = () => {
    
    const videoUrl = 'https://www.example.com/lecture.mp4';

    return (
        <div className='play-video-page'>
            <h1>Playing Video</h1>
            <ReactPlayer
                url={videoUrl}
                controls={true}
                width='50%'
                height='50%'
            />
        </div>
    );
};
export default PlayVideoPage;
