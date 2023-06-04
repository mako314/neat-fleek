import ReviewIcon from "./ReviewIcon";
import Search from "./Search"
import GuidesIcon from "./GuidesIcon"
import DiscussionsIcon from "./DiscussionsIcon";
import {FaSearch, FaFileAlt, FaHome, FaDraftingCompass, FaComments } from "react-icons/fa";

//The css for the icons exist in the index.css file. I gave it a class name "sidebar-icon" and applied the styles via @apply in tailwind!
function Navbar () {
    return (
    <div className="fixed top-0 left-0 h-screen w-auto m-0 flex flex-col bg-gray-900 text-white shadow-lg">
     <Search searchIcon={<FaSearch size="28" color="red" />}/> 
     <HomeIcon homeIcon={<FaHome size="28" />}/>
     <ReviewIcon reviewIcon={<FaFileAlt size="28" />} />
     <GuidesIcon guidesIcon={<FaDraftingCompass size="28" />} />
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