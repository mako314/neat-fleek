import { click } from '@testing-library/user-event/dist/click';
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

function ReviewCards({author, socialMedia, image, gameTitle, tags, review, developer, system, rating, setDisplayContent}){

    // console.log(setDisplayContent) // god passing this function was something

    let mappedTags = tags.map((tag, index) => (
        <span name= "tags" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={`${tag}-${index}`}>{tag}</span>
    ))
    function handleClick(){
      //may have to pass ID to go to that one?
      //write an empty object to populate clicks, after that's done, just use setDisplayContent
      const clickedObject = {
        image: image,
        author: author,
        socialMedia: socialMedia,
        gameTitle: gameTitle,
        review: review,
        developer: developer,
        system: system,
        rating: rating,
      }
      setDisplayContent(clickedObject)
    }
    
    return (

// , index
//`${tag}-${index}` this was placed in the span, so I can likely replicate it with guides
  
//PUT ON CLICK HERE, useState to record what it's grabbing, 
<div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={handleClick}>

  <img name= "image" className="object-scale-down h-48 w-96" src={image} alt={gameTitle}/>

  <div className="px-6 py-4">
    <h1 name= "title" className="font-bold text-xl mb-2">{gameTitle}</h1>
    <h2 name= "author" className="font-style: italic font font-semibold text-xs mb-2">{author}</h2>
    <h3 name= "socialMedia" className ="font-style: italic font font-semibold text-xs mb-2" >{socialMedia}</h3>
    <p name= "review" className="text-gray-700 text-base">
        Review Content Here{/* {review} */}
    </p>
  </div>

  <div className="px-6 pt-4 pb-2">
    {/* {mappedTags} */}
  </div>

</div>
    )
}

export default ReviewCards;