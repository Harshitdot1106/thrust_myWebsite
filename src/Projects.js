import React from 'react';
import './projects.css'; // Import the CSS file

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className='projects-content'>
                <h1>My Projects</h1>
                <section className='projects-section'>
                    <div className='project-item'>
                        <h2>Project Title 1</h2>
                        <p>
                            Brief description of Project 1. This project involved [Key Technologies/Skills Used], and the primary goal was to [Objective].
                        </p>
                    </div>
                    <div className='project-item'>
                        <h2>Project Title 2</h2>
                        <p>
                            Brief description of Project 2. This project focused on [Key Technologies/Skills Used] with the aim of [Objective].
                        </p>
                    </div>
                    {/* Add more project items as needed */}
                </section>
            </div>
        </div>
    );
};

export default Projects;
