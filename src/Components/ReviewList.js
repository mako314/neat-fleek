import React from 'react';
import ReviewCards from './ReviewCards';

function ReviewList(){
    return (
        <ul className="cards">{<ReviewCards/>}</ul>
    )
}

export default ReviewList;