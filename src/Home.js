import React from "react";

function Home(){

    return(
        // treating this div below like a section, could put everything in <section> this div might do the same thing as sectioning it though

    <div className="home-container"> 
    {/* this could hold the whole home container, but we could section stuff out inside of it */}

        <div className="" id="featured-image">
                <img src="https://imguscdn.gamespress.com/cdn/files/BlizzardLive/2023/06/012315-b6ae72f6/D4_Lilith_3840x2160_png_jpgcopy.jpg?otf=y&lightbox=y&ex=2023-08-01+03%3A00%3A00&sky=eff1edc08fe4845e5744a0d86f63add336c5b99ea625331da87465b906929854&w=1024&maxheight=4096&mode=pad&format=jpg"
                alt="Diablo 4"
                /> image content here
                {/* href in here so if you link the picture */}
                <a href="routingstuffhere"></a> 
                </div>

                {/* they seem to include some extra div after the feat img ID one that wraps this so 3 divs total along with a few section tags and article*/}

                {/* below is used for the gridding */}
            <div className=""  id="featured-content-container">
                <div className="" id="featured-text-content">
                    
                    <h2> Text content here ex is title of review </h2>

                    <ul>
                        <li> Short Description</li>
                        <li> Date </li>
                        <li> Location </li>
                        {/* all of these can change, setting a template up. */}
                    </ul>

                </div>
            </div>   
        </div>

    )

}

export default Home;

//separate with sections?