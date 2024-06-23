import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>RoomieMatch</h1>
      <ul>
        <li><Link to="/">Explore</Link></li>
        <li><Link to="/viewmatches">View Matches</Link></li>
        <li><Link to="/editprofile">Edit Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
