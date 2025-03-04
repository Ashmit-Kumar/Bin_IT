import React from 'react';
import '../ui/cards.css';

function Card({ title, imgSrc }) {
  return (
    <div className="contentCard">
      <div className="image">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="bottom">
        <div className="left">
          <div className="dateEventDetails date dateInner">
            <div className="month">NOV</div>
            <div className="day">22</div>
          </div>
        </div>
        <div className="right">
          <div className="eventDetails">
            <div className="eventTitle">
              {title.toUpperCase()}
            </div>
            <div className="venue">
              Place
            </div>
            <div className="time">
              Time
            </div>
            <div className="interested">
              <div className="interestedText">Interested</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;