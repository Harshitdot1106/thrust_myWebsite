import React from 'react';
import './resume.css'; // Import the CSS file

const Resume = () => {
    return (
        <div className='resume-container'>
            <div className='resume-content'>
                <h1>My Resume</h1>
                <section className='resume-section'>
                   
                </section>
                <section className='resume-section'>
                    <h2>Professional Summary</h2>
                    <p>
                        Enthusiastic and skilled professional with a background in [Your Field/Profession]. Adept at working on complex projects and collaborating with cross-functional teams. 
                        Seeking opportunities to leverage skills in [Specific Skills or Specializations] and contribute to innovative solutions.
                    </p>
                </section>
                <section className='resume-section'>
                    <h2>Experience</h2>
                    <div className='experience-item'>
                        <h3>Job Title - Company Name</h3>
                        <p>Dates of Employment: [Start Date] - [End Date]</p>
                        <p>Responsibilities and Achievements:</p>
                        <ul>
                            <li>Responsibility or Achievement</li>
                            <li>Responsibility or Achievement</li>
                            <li>Responsibility or Achievement</li>
                        </ul>
                    </div>
                   
                </section>
                <section className='resume-section'>
                    <h2>Education</h2>
                    <div className='education-item'>
                        <h3>Degree - Institution Name</h3>
                        <p>Dates Attended: [Start Date] - [End Date]</p>
                        <p>Relevant Coursework or Achievements:</p>
                        <ul>
                            <li>Coursework or Achievement</li>
                            <li>Coursework or Achievement</li>
                        </ul>
                    </div>
                    {/* Add more education items as needed */}
                </section>
                <section className='resume-section'>
                    <h2>Skills</h2>
                    <ul>
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                        <li>Skill 3</li>
                        {/* Add more skills as needed */}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Resume;
