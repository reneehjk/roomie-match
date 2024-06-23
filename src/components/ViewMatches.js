import React from 'react';
import MatchCard2 from './MatchCard2';
import pic1 from '../assets/logo.png'; 
import background from '../assets/MatchesBackground.png';

const matches = [
    { name: 'John Doe', image: pic1, age:20, gender: 'Male', budget: 'Moderate', pet: 'No pets', clean: 'Neat freak', social: 'Introverted', alcnsmok: 'Non-smoker, occasional drinker', sleep: 'Night owl', interest: 'Food', contactN: '123123', contactE: 'fnaef@fafds.com'},
    { name: 'Jane Smith', image: pic1, age:20, gender: 'Female', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Travel', contactN: '123123', contactE: 'fnaef@fafds.com' },
    { name: 'Renee', image: pic1, age:20,gender: 'Female', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Travel', contactN: '123123', contactE: 'fnaef@fafds.com' },
    { name: 'Bob', image: pic1, age:20, gender: 'Female', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Travel', contactN: '123123', contactE: 'fnaef@fafds.com' },
    { name: 'John Doe', image: pic1, age:20, gender: 'Male', budget: 'Moderate', pet: 'No pets', clean: 'Neat freak', social: 'Introverted', alcnsmok: 'Non-smoker, occasional drinker', sleep: 'Night owl', interest: 'Food', contactN: '123123', contactE: 'fnaef@fafds.com' },
    { name: 'Jane Smith', image: pic1, age:20, gender: 'Female', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Travel', contactN: '123123', contactE: 'fnaef@fafds.com' },
    { name: 'Renee', image: pic1, age:20,gender: 'Female', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Travel', contactN: '123123', contactE: 'fnaef@fafds.com' },
    { name: 'Bob', image: pic1, age:20, gender: 'Female', budget: 'High', pet: 'Has pets', clean: 'Messy', social: 'Extroverted', alcnsmok: 'Non-smoker, social drinker', sleep: 'Early bird', interest: 'Travel', contactN: '123123', contactE: 'fnaef@fafds.com' }
];

function ViewMatches() {
    return (
        <div className="matches-container">
            <div className="small-title" >RoomieMatch</div>
            <div>
                <h1 className="matches-title">Matches</h1>
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
                        <MatchCard2
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
                            contactE={match.contactE}
                            contactN={match.contactN}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ViewMatches;
