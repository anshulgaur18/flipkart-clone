import React from 'react';
import './review.css';
import ReviewContent from './ReviewContent';


function Review() {
  return (
    <div className='review'>
    <div className="review2">
    <div className="reviewdiv">
      <div className="reviewHeading">Reviews for Popular Men's Footwear</div>
      <ReviewContent/>
      <ReviewContent/>
      <ReviewContent/>
      <ReviewContent/>
      </div>
    </div>
      
    </div>
  )
}

export default Review