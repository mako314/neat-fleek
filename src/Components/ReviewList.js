import React, {useState, useEffect} from 'react';
import ReviewCards from './ReviewCards';

function ReviewList(){
    const [gameReviews, setGameReviews] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3000/reviews")
        .then(resp => resp.json())
        .then(data => setGameReviews(data))
      },[])

      // console.log(gameReviews)

      const mappedGameReviews = gameReviews.map((gameReview) =>(
        <ReviewCards
        key={gameReview.id}
        author={gameReview.author}
        socialMedia={gameReview.socialMedia}
        image={gameReview.image}
        gameTitle={gameReview.gameTitle}
        tags={gameReview.tags}
        review={gameReview.review}
        developer={gameReview.developer}
        system={gameReview.system}
        rating={gameReview.rating}
        />
      ))
    return (
        <ul className="cards">{mappedGameReviews}</ul>
    )
}

export default ReviewList;