import React from "react";

function DiscussionCards({author, socialMedia, title, discussion}){

    // key={gameDiscussion.id}
    // author={gameDiscussion.author}
    // socialMedia={gameDiscussion.socialMedia}
    // title={gameDiscussion.title}
    // discussion={gameDiscussion.discussion}

    // console.log(discussion)


    return (
<div className="m-8 grid grid-cols-12">
  <div className="flex rounded-xl bg-white p-4 col-span-12">

    <div className="mx-2 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full flex-shrink-0">
      <img src="https://us.123rf.com/450wm/sanek13744/sanek137441707/sanek13744170700028/81890650-speech-bubble-flat-vector-icon-discussion-dialog-logo-illustration-business-pictogram-concept.jpg" />
    </div>

    <div className="ml-4 w-full">
        
      <div className="flex w-full items-center justify-between">
        <h2 className="text-lg font-medium">{author}</h2>
        <p>{title}</p>
      </div>

      <div className="mt-4">
        <p>{discussion}</p>

        <div className="mt-4 space-x-2">
          <button className="px-4 py-2 rounded-xl bg-sky-400 text-white font-medium">{socialMedia}</button>
        </div>

      </div>
    </div>

  </div>
</div>
    )
}

export default DiscussionCards