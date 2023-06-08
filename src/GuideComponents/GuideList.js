import React from 'react';
import GuideCards from './GuideCards'
// import FormOne from './FormOne';

function GuideList({gameGuides}){
    // console.log(gameGuides)

      const mappedGameGuides = gameGuides.map((gameGuide) =>(
        <GuideCards
        key={gameGuide.id}
        author={gameGuide.author}
        socialMedia={gameGuide.socialMedia}
        image={gameGuide.image}
        gameTitle={gameGuide.gameTitle}
        tags={gameGuide.tags}
        guides={gameGuide.guide}
        developer={gameGuide.developer}
        system={gameGuide.system}
        rating={gameGuide.rating}
        />
      ))
      //made the .map(singular in here)
      
    return (
      <>
      <h1 className="flex-col flex items-center justify-center text-center font-bold">Guides 🧑‍🏫</h1>
      <br></br>
        <div className="guide-list">{mappedGameGuides}</div>

      </>
    )
}

export default GuideList;