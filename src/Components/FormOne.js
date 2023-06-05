import React from 'react';

// conditionals we may need: 
// toggle review rating (possibly more to come)

//move social media links to bottom
//flex items-center max-w-md mx-auto

function FormOne(){

    return(

        <div className = "h-screen flex items-center justify-center"> 
            <form className="flex-auto items-center justify-center">

                <label>Submission Type</label>

                <select name="postType">
                <option value="reviews">Reviews</option>
                <option value="guides">Guides</option>
                <option value="news">News</option>

                </select>

                <label> Author: </label>
                    <input type="text" name="name" placeholder="name"/>
                
                <label>
                    Game Title
                    <input type="text" name="title" placeholder="title"/>
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
                    <input type= "radio" name="fighting-games" value="fighting-games" placeHolder="fighting games"/>

                </label>
                <label>
                    Review or Rating
                    <textarea
                        name="review-or-rating"
                        defaultValue="Review or rating"
                        rows={4}
                        cols={40}
                    />
                </label>

                <label>
                    Social Media Links
                    <input type="text" name="social-media" placeholder="social-media"/>
                </label>

            </form>
        </div>
    )
}


export default FormOne;


// <label>
//   <input type=“radio” name=“role-playing”>
//   Role Playing
// </label>