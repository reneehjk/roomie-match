import React, { useState } from 'react';

const MatchCard = ({ id, name, imageUrl, age, location, gender, budget, pet, clean, social, alcnsmok, sleep, interest, onMatch }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => { 
    setFlipped(!flipped);
  };

  const handleMatch = () => {
    onMatch({
      id,
      name,
      imageUrl,
      age,
      gender,
      budget,
      pet,
      clean,
      social,
      alcnsmok,
      sleep,
      interest
    });
  };

  return (
    <div className={`match-card ${flipped ? 'flipped' : ''}`} onClick={toggleFlip}>
      <div className={`card-front ${flipped ? 'hidden' : ''}`}>
        <img src={imageUrl} alt={name} />
        <h1 className="card-name">{name}, {age}</h1>
      </div>
      <div className={`card-back ${flipped ? '' : 'hidden'}`}>
        <h1>Additional Information</h1>
        <ul>
        <li><strong>Location:</strong> {location}</li>
                <li><strong>Gender:</strong> {gender}</li>
                <li><strong>Budget:</strong> {budget}</li>
                <li><strong>Pet:</strong> {pet}</li>
                <li><strong>Cleanliness:</strong> {clean}</li>
                <li><strong>Social habits:</strong> {social}</li>
                <li><strong>Alcohol/smoking:</strong> {alcnsmok}</li>
                <li><strong>Sleep schedule:</strong> {sleep}</li>
                <li><strong>Interest:</strong> {interest}</li>
        </ul>
        <button onClick={handleMatch}>Match!</button>
      </div>
    </div>
  );
};

export default MatchCard;
