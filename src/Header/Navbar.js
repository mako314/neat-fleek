import React, {useState, useEffect} from "react";
import ReviewIcon from "./ReviewIcon";
import Search from "./Search"
import GuidesIcon from "./GuidesIcon"
import DiscussionsIcon from "./DiscussionsIcon";
import Logo from "./Logo";
import logo from "/home/bryantw/Development/code/neat-fleet/neat-fleet/src/logo-transparent-white-halfsize.png"
import {FaFileAlt, FaHome, FaComments } from "react-icons/fa";

//The css for the icons exist in the index.css file. I gave it a class name "sidebar-icon" and applied the styles via @apply in tailwind!
function Navbar () {
    useEffect(() =>{
        fetch("http://localhost:3000/reviews")
        .then(resp => resp.json())
        .then(data => setSearchGameReviews(data))
      },[])


    const [searchTerm, setSearchTerm] = useState("")
    const [searchGameReviews, setSearchGameReviews] = useState([])
  

    return (
    <div className="fixed top-0 left-0 h-screen w-auto m-0 flex flex-col bg-gray-900 text-white shadow-lg">
     <Logo logo={logo} />
     <Search /> 
     <HomeIcon homeIcon={<FaHome size="28" />}/>
     <ReviewIcon reviewIcon={<FaFileAlt size="28" />} />
     <GuidesIcon />
     <DiscussionsIcon discussionsIcon={<FaComments size="28"/>} />
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