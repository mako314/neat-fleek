import React from 'react';


function GuideCards({author, socialMedia, image, gameTitle, tags, guides, developer, system, rating}){

    // let mappedTags = tags.map((tag, index) => (
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={`${tag}-${index}`}>{tag}</span>
    // ))

    // , index
//`${tag}-${index}` this was placed in the span, need to replicate it here
    return (

  

<div className="max-w-sm rounded overflow-hidden shadow-lg  bg-antiflashwhite border-green-600 border-2">

  <img className="object-scale-down h-48 w-96" src={image} alt={gameTitle}/>

  <div className="px-6 py-4">
    <h1 className="font-bold text-xl mb-2">{gameTitle}</h1>
    <h2 className="font-style: italic font font-semibold text-xs mb-2">{author}</h2>
    <h3 className ="font-style: italic font font-semibold text-xs mb-2" >{socialMedia}</h3>
    <p className="text-gray-700 text-base">
        Review Content Here{/* {review} */}
    </p>
  </div>

  <div className="px-6 pt-4 pb-2">
    {/* {mappedTags} */}
  </div>

</div>
    )
}

export default GuideCards;