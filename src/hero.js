import React from 'react';
import { useNavigate } from 'react-router-dom';
import './hero.css'; // Import the CSS file
import imImage from './im.jpeg'; // Use your image
import { useState } from 'react';

const Hero = () => {
    const navigate = useNavigate();
    const [showMore, setShowMore] = useState(false);

    const moreText = "Outside of work, I enjoy [Your Hobbies or Interests], which allow me to stay creative and energized. I am always eager to connect with like-minded professionals and explore new opportunities that challenge me to grow both personally and professionally.";

    return (
        <div className='about-container'>
            <div className='about-content'>
                <div className='about-text'>
                    <h2>About</h2>
                    <p>
                        Hello! My name is Harshit, and I am a passionate and driven individual with a deep interest in [Your Field/Profession].
                        With a background in Web developement, I have developed a strong foundation in HTML,CSS and JS.
                        My journey has led me to explore various aspects of this  , where I continuously strive to enhance
                        my knowledge and contribute to innovative projects.
                    </p>
                    {showMore && <p>{moreText}</p>}
                    <p>
                        <button className='toggle-button' onClick={() => setShowMore(!showMore)}>
                            {showMore ? 'Show Less' : 'Show More'}
                        </button>
                    </p>
                </div>
                <div className='about-image'>
                    <img src={imImage} alt='Harshit' />
                </div>
            </div>
            <div className='hero-buttons'>
                <button className='hero-button' onClick={() => navigate('/resume')}>Resume</button>
                <button className='hero-button' onClick={() => navigate('/projects')}>Projects</button>
                <button className='hero-button' onClick={() => navigate('/connect')}>Experience</button>
            </div>
        </div>
    );
};

export default Hero;
