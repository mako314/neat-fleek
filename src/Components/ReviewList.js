import React from 'react';
import ReviewCards from './ReviewCards';
import FormOne from './FormOne';

function ReviewList({gameReviews, setGameReviews}){

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

        {/* <FormOne  gameReviews = {gameReviews} setGameReviews={setGameReviews}/> */}
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">{mappedGameReviews}</div>

      </>
    )
}

export default ReviewList;

//<FormOne  gameReviews = {gameReviews} setGameReviews={setGameReviews}/>