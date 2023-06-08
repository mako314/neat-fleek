import React from 'react';
import DiscussionCards from './DiscussionCards';
// import FormOne from './FormOne';

function DiscussionsList({gameDiscussions}){
    // console.log(gameGuides)

      const mappedDiscussions = gameDiscussions.map((gameDiscussion) =>(
        <DiscussionCards
        key={gameDiscussion.id}
        author={gameDiscussion.author}
        socialMedia={gameDiscussion.socialMedia}
        title={gameDiscussion.title}
        discussion={gameDiscussion.discussion}
        />
      ))
    
      
    return (
      <>
        
        <h1 className="flex-col flex items-center justify-center text-center font-bold">Lets Discuss!🗣️📣</h1>
        <br></br>
         <div className="discussionslist">{mappedDiscussions}</div> 

      </>
    )
}

export default DiscussionsList;