import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MatchCard from './MatchCard';
import pic1 from '../assets/logo.png';
import background from '../assets/MatchesBackground.png';

const Matches = () => {
  const [matches, setMatches] = useState([
        { id: 1, name: 'John Doe', image: pic1, age: 20, gender: 'Male', budget: 'Moderate', pet: 'No pets', clean: 'Neat freak', social: 'Introverted', alcnsmok: 'Non-smoker, occasional drinker', sleep: 'Night owl', interest: 'Food', location: 'New York, NY' },
        { id: 2, name: 'Jane Smith', image: pic1, age: 25, gender: 'Female', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Travel', location: 'Los Angeles, CA' },
        { id: 3, name: 'Michael Johnson', image: pic1, age: 22, gender: 'Male', budget: 'Low', pet: 'No pets', clean: 'Messy', social: 'Introverted', alcnsmok: 'Non-smoker, non-drinker', sleep: 'Night owl', interest: 'Movies', location: 'Chicago, IL' },
        { id: 4, name: 'Alice Johnson', image: pic1, age: 25, gender: 'Female', budget: 'Moderate', pet: 'No pets', clean: 'Neat freak', social: 'Introverted', alcnsmok: 'Non-smoker, occasional drinker', sleep: 'Night owl', interest: 'Art', location: 'San Francisco, CA' },
        { id: 5, name: 'Michael Brown', image: pic1, age: 22, gender: 'Male', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Music', location: 'San Francisco, CA' },
        { id: 6, name: 'Sophia Martinez', image: pic1, age: 23, gender: 'Female', budget: 'Low', pet: 'No pets', clean: 'Messy', social: 'Introverted', alcnsmok: 'Non-smoker', sleep: 'Night owl', interest: 'Books', location: 'San Francisco, CA' },
        { id: 7, name: 'Chris Wilson', image: pic1, age: 27, gender: 'Male', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Social smoker, social drinker', sleep: 'Late riser', interest: 'Gaming', location: 'Boston, MA' },
        { id: 8, name: 'Olivia Lee', image: pic1, age: 23, gender: 'Female', budget: 'Moderate', pet: 'Has pets', clean: 'Messy', social: 'Introverted', alcnsmok: 'Non-smoker, occasional drinker', sleep: 'Night owl', interest: 'Books', location: 'San Francisco, CA' },
        { id: 9, name: 'Daniel Moore', image: pic1, age: 26, gender: 'Male', budget: 'Moderate', pet: 'No pets', clean: 'Neat freak', social: 'Introverted', alcnsmok: 'Non-smoker, non-drinker', sleep: 'Early bird', interest: 'Technology', location: 'Austin, TX' },
        { id: 10, name: 'Emma Taylor', image: pic1, age: 29, gender: 'Female', budget: 'High', pet: 'No pets', clean: 'Neat freak', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Night owl', interest: 'Fashion', location: 'Denver, CO' }
    ]);

  const [viewedMatches, setViewedMatches] = useState([]);

  const handleMatchClick = (matchedPerson) => {
    // Filter out the matched person from matches
    const updatedMatches = matches.filter(person => person.id !== matchedPerson.id);

    // Update state to reflect the change
    setMatches(updatedMatches);

    // Add the matched person to viewedMatches
    setViewedMatches(prevMatches => [...prevMatches, matchedPerson]);
  };

  return (
    <div className="matches-container">
      <div className="small-title">RoomieMatch</div>
      <h1 className="matches-title">Explore</h1>
      <div className='side-bar-container'>
        <p><Link to="/explore">Explore</Link></p>
        <p><Link to="/viewmatches">View Matches</Link></p>
        <p><Link to="/editprofile">Edit Profile</Link></p>
      </div>
      <div className="matches-content">
        <div className="matches-container-background"
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
              <MatchCard
                key={index}
                id={match.id}
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
                onMatch={handleMatchClick}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="sign-out-button">
        <Link to="/" className="btn btn-sign-out">Sign Out</Link>
      </div>
    </div>
  );
};

export default Matches;
