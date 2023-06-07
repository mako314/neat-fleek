import React from 'react';
import GuideCards from './GuideCards'
// import FormOne from './FormOne';

function GuideList({gameGuides}){
    // console.log(gameGuides)

      const mappedGameGuides = gameGuides.map((gameGuides) =>(
        <GuideCards
        key={gameGuides.id}
        author={gameGuides.author}
        socialMedia={gameGuides.socialMedia}
        image={gameGuides.image}
        gameTitle={gameGuides.gameTitle}
        tags={gameGuides.tags}
        guides={gameGuides.guide}
        developer={gameGuides.developer}
        system={gameGuides.system}
        rating={gameGuides.rating}
        />
      ))
      
    return (
      <>

        <div className="guide-list">{mappedGameGuides}</div>

      </>
    )
}

export default GuideList;