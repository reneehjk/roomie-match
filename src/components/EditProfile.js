import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


// maybe we can make these previous values
const EditProfile = () => {
    const [profile, setProfile] = useState({
        budget: '',
        pet: '',
        cleanliness: '',
        socialHabits: '',
        alcoholSmoking: '',
        sleepSchedule: '',
        workSchoolSchedule: '',
        interests: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(profile); 
    };

    return (
        <div className="edit-profile-container">
            <div className="small-title">RoomieMatch</div>
            <h1 className="matches-title">Edit Profile</h1>
            <div className='side-bar-container'>
                <p><Link to="/explore">Explore</Link></p>
                <p><Link to="/viewmatches">View Matches</Link></p>
                <p><Link to="/editprofile">Edit Profile</Link></p>
            </div>
            <form onSubmit={handleSubmit} className="edit-profile-form">
                <label>
                    Budget:
                    <input type="text" name="budget" value={profile.budget} onChange={handleChange} />
                </label>
                <label>
                    Pet:
                    <input type="text" name="pet" value={profile.pet} onChange={handleChange} />
                </label>
                <label>
                    Cleanliness:
                    <input type="text" name="cleanliness" value={profile.cleanliness} onChange={handleChange} />
                </label>
                <label>
                    Social Habits:
                    <input type="text" name="socialHabits" value={profile.socialHabits} onChange={handleChange} />
                </label>
                <label>
                    Alcohol/Smoking:
                    <input type="text" name="alcoholSmoking" value={profile.alcoholSmoking} onChange={handleChange} />
                </label>
                <label>
                    Sleep Schedule:
                    <input type="text" name="sleepSchedule" value={profile.sleepSchedule} onChange={handleChange} />
                </label>
                <label>
                    Work/School Schedule:
                    <input type="text" name="workSchoolSchedule" value={profile.workSchoolSchedule} onChange={handleChange} />
                </label>
                <label>
                    Interests:
                    <input type="text" name="interests" value={profile.interests} onChange={handleChange} />
                </label>
                <Link to="/explore" button type="submit" className="submit-btn">Save Changes</Link>
                <Link to="/explore" className="cancel-btn">Cancel Changes</Link>          
            </form>
            <div className="sign-out-button">
                    <Link to="/" className="btn btn-sign-out">Sign Out</Link>
                </div>
        </div>
    );
};

export default EditProfile;
