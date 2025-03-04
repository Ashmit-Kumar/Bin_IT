import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../ui//feedback-cards.css';

const FeedbackCardComp = ({ imgSrc, rating, comment, commenter }) => {
  return (
    <div className="card">
      <div className="purple"></div>
      <div className="baigan"></div>
      <img src={imgSrc} alt="feedback" className="image" />
      <div className="content">
        <div className="inside-content">
          <div className="rating">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < rating ? 'gold' : 'lightgray'}
              size={20}
            />
          ))}
        </div>
        <p className="comment">{comment}</p>
        <p className="commenter">- {commenter}</p>
        </div>
        
      </div>
    </div>
  );
};

export default FeedbackCardComp;