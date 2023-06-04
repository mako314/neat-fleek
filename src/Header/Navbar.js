import ReviewIcon from "./ReviewIcon";
import Search from "./Search"
import {FaSearch, FaFileAlt, FaHome} from "react-icons/fa";

function Navbar () {
    return (
    <div className="fixed top-0 left-0 h-screen w-auto m-0 flex flex-col bg-gray-900 text-white shadow-lg">
     <Search searchIcon={<FaSearch size="28" color="red" />}/> 
     <HomeIcon homeIcon={<FaHome size="28" />}/>
     <ReviewIcon reviewIcon={<FaFileAlt size="28" />} />
    </div>
    )
}

function HomeIcon ({homeIcon}) {
    return (
        <div className="sidebar-icon">
            {homeIcon}
        </div>
    )
}

export default Navbar