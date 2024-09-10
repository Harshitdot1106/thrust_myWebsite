import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './hero.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import Connect from './Connect.js';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/connect" element={<Connect />} />
            </Routes>
        </Router>
    );
}

export default App;
