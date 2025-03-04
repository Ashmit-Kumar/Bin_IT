import React from 'react';
import FeedbackCardComp from '../../../ui/feedback-cards';
import '../../../css/feedback.css'

function HomeFeedback() {
  return (
    <>
      <div className="feedback">
        <div className="feedback-title">
          FEEDBACK
        </div>
        <div className="fdb-container">
          <FeedbackCardComp
            imgSrc="/pfp.jpg"
            rating={5}
            comment="BinIt effectively connects communities to tackle local waste issues, offering prompt solutions and eco-friendly practices. Their customer service is exemplary."
            commenter="Ayush Sharma"
          />
          <FeedbackCardComp
            imgSrc="/pfp.jpg"
            rating={4}
            comment="BinIt effectively connects communities to tackle local waste issues, offering prompt solutions and eco-friendly practices. Their customer service is exemplary."
            commenter="Asmit Kumar"
          />
          <FeedbackCardComp
            imgSrc="/pfp.jpg"
            rating={3}
            comment="BinIt effectively connects communities to tackle local waste issues, offering prompt solutions and eco-friendly practices. Their customer service is exemplary."
            commenter="Divyansh Saxena"
          />
          <FeedbackCardComp
            imgSrc="/pfp.jpg"
            rating={5}
            comment="BinIt effectively connects communities to tackle local waste issues, offering prompt solutions and eco-friendly practices. Their customer service is exemplary."
            commenter="Rudra Singh"
          />
        </div>
      </div>
    </>
  )
}

export default HomeFeedback;