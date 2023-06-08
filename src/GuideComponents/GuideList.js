import React from 'react';
import GuideCards from './GuideCards'
// import FormOne from './FormOne';

function GuideList({gameGuides, setDisplayContent}){
    // console.log(gameGuides)

      const mappedGameGuides = gameGuides.map((gameGuide) =>(
        <GuideCards
        setDisplayContent={setDisplayContent}
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

        <div className="guide-list">{mappedGameGuides}</div>

      </>
    )
}

export default GuideList;