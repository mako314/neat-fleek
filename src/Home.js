import React from "react";
import ReviewList from './ReviewComponents/ReviewList';
import FormOne from './ReviewComponents/FormOne';

function Home({gameReviews}){
    

    return(
        // treating this div below like a section, could put everything in <section> this div might do the same thing as sectioning it though
 
    <div className="home-container"> 
    {/* this could hold the whole home container, but we could section stuff out inside of it 
    mx-auto w-full max-w-xl md:max-w-7xl object-cover rounded-4
    */}
        <div className="" id="featured-image">
                <img className=" mx-auto w-full max-w-screen-md md:max-w-7x1 object-contain rounded-xl"
                src="https://imguscdn.gamespress.com/cdn/files/BlizzardLive/2023/06/012315-b6ae72f6/D4_Lilith_3840x2160_png_jpgcopy.jpg?otf=y&lightbox=y&ex=2023-08-01+03%3A00%3A00&sky=eff1edc08fe4845e5744a0d86f63add336c5b99ea625331da87465b906929854&w=1024&maxheight=4096&mode=pad&format=jpg"
                alt="Diablo 4"
                />
                {/* href in here so if you link the picture */}
                <a href="https://blizzard.gamespress.com/Diablo-IV#?tab=artwork-5&scrollto="></a> 
        </div>

                {/* below is used for the gridding */}

            <div className="xl:grid-layout gap-y-0 mt-16 md:mt-24"  id="featured-content-container">
                <div className="xl:col-span-9" id="featured-text-content">
                    
                    <h2 className="text-3xl md:text-5xl text-center  "> A Dive into Diablo 4 </h2>

                    <ul className="f-body-4 mt-16 md:mt-24">
                        <li className="indent-16"> The endless battle between the High Heavens and the Burning Hells rages on as chaos threatens to consume Sanctuary. With ceaseless demons to slaughter, countless Abilities to master, nightmarish Dungeons, and Legendary loot, this vast, open world brings the promise of adventure and devastation. Survive and conquer darkness – or succumb to the shadows. </li>
                        <li> Neat Fleets First Article! </li>
                        <li> June 6, 2023 </li>
                        {/* all of these can change, setting a template up. */}
                    </ul>
                </div>
                
            </div> 
            <ReviewList gameReviews={gameReviews} />
     </div>
    //  this div returns, this is my big return div o ya
    )

}

export default Home;

//separate with sections?