// To display card on matches page

import React, { useState } from 'react';
import '../App.css'; 

const MatchCard2 = ({ name, imageUrl, age, gender, budget, pet, clean, social, alcnsmok, sleep, interest, contactE, contactN }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
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
                <li><strong>Gender:</strong> {gender}</li>
                <li><strong>Budget:</strong> {budget}</li>
                <li><strong>Pet:</strong> {pet}</li>
                <li><strong>Cleanliness:</strong> {clean}</li>
                <li><strong>Social habits:</strong> {social}</li>
                <li><strong>Alcohol/smoking:</strong> {alcnsmok}</li>
                <li><strong>Sleep schedule:</strong> {sleep}</li>
                <li><strong>Interest:</strong> {interest}</li>
                <li><strong>Email:</strong> {contactE}</li>
                <li><strong>Phone number:</strong> {contactN}</li>
            </ul>
      </div>
    </div>
  );
};

export default MatchCard2;
