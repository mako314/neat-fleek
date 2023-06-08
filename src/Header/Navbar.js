import React from "react";
import Search from "./Search"
import Logo from "./Logo";
import {Link} from "react-router-dom";
import {FaFileAlt, FaHome, FaComments, FaDraftingCompass } from "react-icons/fa";

//The css for the icons exist in the index.css file. I gave it a class name "sidebar-icon" and applied the styles via @apply in tailwind!
function Navbar ({setSearchTerm}) {

    return (
    <div className="">
     <Logo />
     <Search setSearchTerm={setSearchTerm} /> 
     <HomeIcon homeIcon={<FaHome size="40" />}/>
     <ReviewIcon reviewIcon={<FaFileAlt size="40" />} />
     <GuidesIcon guidesIcon={<FaDraftingCompass size="40" />}/>
     <DiscussionsIcon discussionsIcon={<FaComments size="40"/>} />
    </div>
    )
}

//This is our Home Icon Component
function HomeIcon ({homeIcon}) {
    
    return (
        <Link to={'/'}><div className="sidebar-icon"> {homeIcon} </div></Link>

    )
}

function ReviewIcon ({reviewIcon}) {
    return (
        <div>
            
            <Link to={'review-list'}><div className="sidebar-icon"> {reviewIcon} </div></Link>
           
        </div>

    )
}

function GuidesIcon ({guidesIcon}) {
    return (
        <div>
            
            <Link to={'guide-list'}><div className="sidebar-icon"> {guidesIcon} </div></Link>
           
        </div>

    )
}

function DiscussionsIcon ({discussionsIcon}) {
    return (
        <div>
            
            <Link to={'discussionslist'}><div className="sidebar-icon"> {discussionsIcon} </div></Link>
           
        </div>

    )
}

export default Navbar