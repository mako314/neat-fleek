import React from 'react';

// key={gameReview.id}
// author={gameReview.author}
// socialMedia={gameReview.socialMedia}
// image={gameReview.image}
// gameTitle={gameReview.gameTitle}
// tags={gameReview.tags}
// review={gameReview.review}
// developer={gameReview.developer}
// system={gameReview.system}
// rating={gameReview.rating}

function ReviewCards({author, socialMedia, image, gameTitle, tags, review, developer, system, rating}){

    
    return (
  
<div className="grid-container">
    <div class="grid-item">
    <li className="card">
      <img src={image} alt={gameTitle} />

      <h4>{gameTitle}</h4>
      <h5>{author}</h5>
      <h5>{socialMedia}</h5>

      <p>{rating} out of 10.</p>

      <p>{review}</p>

      <p>Developed by {developer}, available on {system} </p>

      <span className="primary">{tags}</span>

    </li>
    </div>
</div>
    )
}

export default ReviewCards;