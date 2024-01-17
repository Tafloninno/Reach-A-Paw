import React from 'react';
import '../navbar/navBar.css';
import './home.css';
import NavBar from '../navbar/NavBar';

const Home = () => (

  <div className="Homepage">
    <NavBar />
    <div className="home-container">
      <div className="home-word">
        <h2>connect People with Pets</h2>
        <h4>Learn About out passionate team and how you can help</h4>
      </div>
      <div className="home-donate-button">
        <button type="button">GET INVOLVED</button>
      </div>
    </div>
  </div>

);

export default Home;
