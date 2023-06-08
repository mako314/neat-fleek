import React from "react";

function DisplayPage(){


return (
<div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
    <img className="object-scale-down h-48 w-96" src= "https://www.fightersgeneration.com/nz3/game/sf5-ryu-key-artwork.jpg" alt="game title"/>
    <div className="w-fixed w-full flex-shrink flex-grow-0 px-4">

    </div>

<div className="w-full flex-grow pt-1 px-3">

    <h1 className="font-bold text-xl mb-2"> game title jsx</h1>

    <h2 className="font-style: italic font font-semibold text-xs mb-2">author jsx</h2>

    <h3 className ="font-style: italic font font-semibold text-xs mb-2" > Social Media JSX </h3>

    <p className="text-gray-700 text-base"> Review Content Here{/* {review} */} </p>

</div>

    <div className="w-fixed w-full flex-shrink flex-grow-0 px-2">


    </div>

</div>
    )
}

export default DisplayPage;

// when they click, have access to the object they click, 



// {/* <img className="object-scale-down h-48 w-96" src={image} alt={gameTitle}/>

// <div className="px-6 py-4">
//   <h1 className="font-bold text-xl mb-2">{gameTitle}</h1>
//   <h2 className="font-style: italic font font-semibold text-xs mb-2">{author}</h2>
//   <h3 className ="font-style: italic font font-semibold text-xs mb-2" >{socialMedia}</h3>
//   <p className="text-gray-700 text-base">
//       Review Content Here{/* {review} */}
//   </p>
// </div>

// <div className="px-6 pt-4 pb-2">
//   {/* {mappedTags} */}
// </div> */}