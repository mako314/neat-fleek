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

  

<div class="max-w-sm rounded overflow-hidden shadow-lg">

  <img class="object-scale-down h-48 w-96" src={image} alt={gameTitle}/>

  <div class="px-6 py-4">
    <h1 class="font-bold text-xl mb-2">{gameTitle}</h1>
    <h2 class="font-style: italic font font-semibold text-xs mb-2">{author}</h2>
    <h3 class ="font-style: italic font font-semibold text-xs mb-2" >{socialMedia}</h3>
    <p class="text-gray-700 text-base">
        Review Content Here
    </p>
  </div>

  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>

</div>
    )
}

export default ReviewCards;