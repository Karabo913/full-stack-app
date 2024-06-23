import React from 'react';
import introImage from '../../assets/Intro.jpg';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to the Employee Directory!</h2>
      <h1>Neo Amese 577845</h1>
      <h3>WDB361 PROJECT </h3>
      <img src={introImage} alt="Introductory" className="intro-image" />
      <p>Use the navigation links to view all employees or filter by department.</p>
    </div>
  );
}

export default Home;
