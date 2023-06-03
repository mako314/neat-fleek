import React, {useState, useEffect} from 'react';
import ReviewCards from './ReviewCards';

function ReviewList(){
    const [gameReviews, setGameReviews] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3000/reviews")
        .then(resp => resp.json())
        .then(data => setGameReviews(data))
      },[])

      console.log(gameReviews)

      const mappedGameReviews = gameReviews.map((gameReview) =>(
        <ReviewCards/>
      ))


    return (
        <ul className="cards">{<ReviewCards/>}</ul>
    )
}

export default ReviewList;