import React from "react";
import ReviewIcon from "./ReviewIcon";
import Search from "./Search"
import GuidesIcon from "./GuidesIcon"
import DiscussionsIcon from "./DiscussionsIcon";
import Logo from "./Logo";
import logo from "/home/bryantw/Development/code/neat-fleet/neat-fleet/src/logo-transparent-white-halfsize.png"
// import logo from "/home/bryantw/Development/code/neat-fleet/neat-fleet/src/logo-transparent-white-halfsize.png"
import {FaFileAlt, FaHome, FaComments } from "react-icons/fa";

//The css for the icons exist in the index.css file. I gave it a class name "sidebar-icon" and applied the styles via @apply in tailwind!
function Navbar ({setSearchTerm}) {

    return (
    <div className="">
     <Logo logo={logo} />
     <Search setSearchTerm={setSearchTerm} /> 
     <HomeIcon homeIcon={<FaHome size="40" />}/>
     <ReviewIcon reviewIcon={<FaFileAlt size="40" />} />
     <GuidesIcon />
     <DiscussionsIcon discussionsIcon={<FaComments size="40"/>} />
    </div>
    )
}

//This is our Home Icon Component
function HomeIcon ({homeIcon}) {
    return (
        <div className="sidebar-icon">
            {homeIcon}
        </div>
    )
}

export default Navbar