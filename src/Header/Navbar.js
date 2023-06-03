import Search from "./Search"
import {FaSearch} from "react-icons/fa";

function Navbar () {
    return (
    <div className="fixed top-0 left-0 h-screen w-auto m-0 flex flex-col bg-gray-900 text-white shadow-lg">
     <Search searchIcon={<FaSearch size="28" />}/> 
    </div>
    )
}

export default Navbar