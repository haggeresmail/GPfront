import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import ReactPlayer from 'react-player';
import './RecordedLecture.css';

const RecordedLecture = ({ url }) => {
    const navigate = useNavigate(); // Use useNavigate hook

    const handlePlayVideo = () => {
        // Navigate to another page where the video plays
        navigate('/play-video');
    };

    return (
        <div className='recorded-lecture'>
            {/* <ReactPlayer
                url={url}
                controls={true}
                width='50%'
                height='50%'
            /> */}
            <form>
            <h1>Recorded Lecture</h1>
                <button type='button' onClick={handlePlayVideo}>
                    Lecture 1
                </button>
                <button type='button' onClick={handlePlayVideo}>
                    Lecture 3
                </button>
                <button type='button' onClick={handlePlayVideo}>
                    Lecture 2
                </button>
            </form>
        </div>
    );
};

export default RecordedLecture;
