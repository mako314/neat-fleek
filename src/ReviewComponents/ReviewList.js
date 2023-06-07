import React from 'react';
import ReviewCards from './ReviewCards';
// import FormOne from './FormOne';

function ReviewList({gameReviews}){

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
      <>

        <div className="review-list">{mappedGameReviews}</div>

      </>
    )
}

export default ReviewList;

//<FormOne  gameReviews = {gameReviews} setGameReviews={setGameReviews}/>