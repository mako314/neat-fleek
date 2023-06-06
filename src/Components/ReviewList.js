import React, {useState, useEffect} from 'react';
import ReviewCards from './ReviewCards';
import FormOne from './FormOne';

function ReviewList(){
    const [gameReviews, setGameReviews] = useState([])
    //use a state variable here or take this one 

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
      <>
        <FormOne  gameReviews = {gameReviews} setGameReviews={setGameReviews}/>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">{mappedGameReviews}</div>
      </>
    )
}

export default ReviewList;