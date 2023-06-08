import React from 'react';
import ReviewCards from './ReviewCards';
// import FormOne from './FormOne';

function ReviewList({gameReviews, setDisplayContent}){

      const mappedGameReviews = gameReviews.map((gameReview) =>(
        <ReviewCards
        setDisplayContent={setDisplayContent}
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
      // console.log(setDisplayContent)
    return (
      <>

        <div className="review-list">{mappedGameReviews}</div>

      </>
    )
}

export default ReviewList;

//<FormOne  gameReviews = {gameReviews} setGameReviews={setGameReviews}/>