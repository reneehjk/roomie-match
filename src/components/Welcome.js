import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import background from '../assets/WBackground.png';
import logo from '../assets/logo.png';

const Welcome = () => {

    return (
        <div 
            className="welcome-container" 
            style={{ 
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '101vw'
            }}
        >
            <img src={logo} alt="Logo" className="logo" />
            <div className="buttons-container">
                <Link to="/login" className="button button-yellow">Login</Link>
                <Link to="/signup" className="button button-blue">Sign Up</Link>
            </div>
            <h1 className="welcome-heading">Welcome to RoomieMatch</h1>
            <p className="slogan">Discover Your Ideal Roommate: Perfect Matches for Hassle-Free Living</p>
        </div>
    );
};

export default Welcome;
