import React, {useState} from 'react';

// conditionals we may need: 
// toggle review rating (possibly more to come)

//move social media links to bottom
//flex items-center max-w-md mx-auto

// <label>
//   <input type=“radio” name=“role-playing”>
//   Role Playing
// </label>

// on change on select, stateVariable, e.target.postType.value 

function FormOne({gameReviews, setGameReviews, gameGuides, setGameGuides, gameDiscussions, setGameDiscussions}){
    const [submitType, setSubmitType] = useState("")
    // console.log(gameReviews)

    function handleSubmit(e){
    e.preventDefault()

    
    setSubmitType(e.target.postType.value) // I think I'll use state.

    // console.log(typeof submitType)  This works, I also did typeof to determine whether or not this is a string.
    

    if (submitType === "reviews" ) {
    // fetch('http://localhost:3000/reviews', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body : JSON.stringify(newReview)
    // })

    // .then(resp => resp.json())
    // .then(newReview => setGameReviews([...gameReviews, newReview]))

      } else if (submitType === "guides") {
        // fetch('http://localhost:4000/guides', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body : JSON.stringify(newReview)
    // })

    // .then(resp => resp.json())
    // .then(newGameGuideObject => setGameGuides([...gameGuides, newGameGuideObject here]))
      } else {
        // fetch('http://localhost:5000/discussions', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body : JSON.stringify(newReview)
    // })

    // .then(resp => resp.json())
    // .then(newDiscussion => setGameDiscussions([...gameDiscussions, newDiscussion]))
      }

        //make an object for discussions
    const newReview = {
        author: e.target.name.value,
        socialMedia:e.target.socialmedia.value,
        image: e.target.image.value,
        gameTitle: e.target.title.value,
        tags: e.target.value,
        review: e.target.review.value,
        developer: e.target.developer.value,
        system: e.target.systems.value,
        rating: e.target.rating.value
    }
    // fetch('http://localhost:3000/reviews', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body : JSON.stringify(newReview)
    // })

    // .then(resp => resp.json())
    // .then(newReview => setGameReviews([...gameReviews, newReview]))

    }



    return(

        <div className = "h-screen flex items-center justify-center"> 
            <form className="flex-auto items-center justify-center"
            onSubmit={handleSubmit}
            >

                <label>Submission Type</label>

                <select name="postType"> 
                <option value="reviews">Reviews</option>
                <option value="guides">Guides</option>
                <option value="discussions">Discussions</option>

                </select>

                <label> Author: </label>
                    <input type="text" name="name" placeholder="name"/>
                
                <label>
                    Game Title
                    <input type="text" name="title" placeholder="title"/>
                </label>

                <label>
                    Image
                    <input type="text" name="image" placeholder="image link"/>
                </label>

                <label>
                    Developer
                    <input type="text" name="developer" placeholder="developer"/>
                </label>
                <label>
                    Select a System:
                    <select name="systems">
                        <option value="PC"> PC </option>
                        <option value="PlayStation"> PlayStation 5 </option>
                        <option value="Xbox"> Xbox Series X|S </option>
                        <option value="Nintendo"> Nintendo Switch </option>
                    </select>
                </label>
                <label>
                    Tags, Check all that apply:

                    <input type= "radio" name="role-playing" value="role-playing"/>
                    <input type= "radio" name="multiplayer" value="multiplayer"/>
                    <input type= "radio" name="puzzlers-and-party" value="puzzlers-and-party"/>
                    <input type= "radio" name="shooters" value="shooters"/>
                    <input type= "radio" name="simulation-and-sports" value="simulation-and-sports"/>
                    <input type= "radio" name="strategy" value="strategy"/>
                    <input type= "radio" name="action-adventure" value="action-adventure"/>
                    <input type= "radio" name="sandbox" value="sandbox"/>
                    <input type= "radio" name="real-time-strategy" value="real-time-strategy"/>
                    <input type= "radio" name="multiplayer-online-battle-arena" value="multiplayer-online-battle-arena"/>
                    <input type= "radio" name="platformer" value="platformer"/>
                    <input type= "radio" name="survival-and-horror" value="survival-and-horror"/>
                    <input type= "radio" name="battle-royale-games" value="battle-royale-games"/>
                    <input type= "radio" name="fighting-games" value="fighting-games"/>

                </label>

                <label> Rating: </label>
                    <input type="text" name="rating" placeholder="Rating"/>

                <label>
                    Review
                    <textarea
                        name="review"
                        defaultValue="Review"
                        rows={4}
                        cols={40}
                    />
                </label>

                <label>
                    Social Media Links
                    <input type="text" name="socialmedia" placeholder="social-media"/>
                </label>

                <button className="bg-red-700" type="submit"> SUBMIT BUTTON </button>

            </form>
        </div>
    )
}


export default FormOne;