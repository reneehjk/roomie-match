import React from 'react';
import { Link } from 'react-router-dom';
import MatchCard2 from './MatchCard2';
import pic1 from '../assets/logo.png'; 
import background from '../assets/ViewM.png';

const matches = [
    { id: 4, name: 'Alice Johnson', image: pic1, age: 25, gender: 'Female', budget: 'Moderate', pet: 'No pets', clean: 'Neat freak', social: 'Introverted', alcnsmok: 'Non-smoker, occasional drinker', sleep: 'Night owl', interest: 'Art', location: 'San Francisco, CA', contactN: '1234567890', contactE: 'alice.johnson@example.com' },
    { id: 5, name: 'Michael Brown', image: pic1, age: 22, gender: 'Male', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Music', location: 'San Francisco, CA', contactN: '9876543210', contactE: 'michael.brown@example.com' },
    { id: 6, name: 'Sophia Martinez', image: pic1, age: 23, gender: 'Female', budget: 'Low', pet: 'No pets', clean: 'Messy', social: 'Introverted', alcnsmok: 'Non-smoker', sleep: 'Night owl', interest: 'Books', location: 'San Francisco, CA', contactN: '5551234567', contactE: 'sophia.martinez@example.com' }
  ];

function ViewMatches() {
    return (
        <div className="matches-container">
            <div className="small-title">RoomieMatch</div>
            <h1 className="matches-title">Matches</h1>
            <div className='side-bar-container'>
                <p><Link to="/explore">Explore</Link></p>
                <p><Link to="/viewmatches">View Matches</Link></p>
                <p><Link to="/editprofile">Edit Profile</Link></p>
            </div>
            <div 
                className="matches-container-background"
                style={{ 
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    height: '100%',
                    width: '160vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }}
            >
                <div className="matches-list">
                    {matches.map((match, index) => (
                        <MatchCard2
                            key={index}
                            name={match.name}
                            imageUrl={match.image}
                            age={match.age}
                            location={match.location}
                            gender={match.gender}
                            budget={match.budget}
                            pet={match.pet}
                            clean={match.clean}
                            social={match.social}
                            alcnsmok={match.alcnsmok}
                            sleep={match.sleep}
                            interest={match.interest}
                            contactE={match.contactE}
                            contactN={match.contactN}
                        />
                    ))}
                </div>
                <div className="sign-out-button">
                    <Link to="/" className="btn btn-sign-out">Sign Out</Link>
                </div>
            </div>
        </div>
    );
}

export default ViewMatches;