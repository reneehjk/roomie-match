// To view the possible matches (explore page)

import React from 'react';
import MatchCard from './MatchCard';
import pic1 from '../assets/logo.png'; 
import background from '../assets/MatchesBackground.png';

const matches = [
    { name: 'John Doe', image: pic1, age:20, gender: 'Male', budget: 'Moderate', pet: 'No pets', clean: 'Neat freak', social: 'Introverted', alcnsmok: 'Non-smoker, occasional drinker', sleep: 'Night owl', interest: 'Food' },
    { name: 'Jane Smith', image: pic1, age:20, gender: 'Female', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Travel' },
    { name: 'Renee', image: pic1, age:20,gender: 'Female', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Travel' },
    { name: 'Bob', image: pic1, age:20, gender: 'Female', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Travel' },
    { name: 'John Doe', image: pic1, age:20, gender: 'Male', budget: 'Moderate', pet: 'No pets', clean: 'Neat freak', social: 'Introverted', alcnsmok: 'Non-smoker, occasional drinker', sleep: 'Night owl', interest: 'Food' },
    { name: 'Jane Smith', image: pic1, age:20, gender: 'Female', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Travel' },
    { name: 'Renee', image: pic1, age:20,gender: 'Female', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Travel' },
    { name: 'Bob', image: pic1, age:20, gender: 'Female', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Travel' }
];

function Matches() {
    return (
        <div className="matches-container">
            <div className="small-title" >RoomieMatch</div>
            <div>
                <h1 className="matches-title">Explore</h1>
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
                    {matches.map(match => (
                        <MatchCard
                            key={match.id}
                            name={match.name}
                            imageUrl={match.image}
                            age = {match.age}
                            gender={match.gender}
                            budget={match.budget}
                            pet={match.pet}
                            clean={match.clean}
                            social={match.social}
                            alcnsmok={match.alcnsmok}
                            sleep={match.sleep}
                            interest={match.interest}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Matches;
