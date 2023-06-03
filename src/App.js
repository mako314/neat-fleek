import React from 'react';
import Navbar from './Navbar';
import {FaSearch} from "react-icons/fa";
import ReviewCards from './Components/ReviewCards';
import ReviewList from './Components/ReviewList';
import FormOne from './Components/FormOne';

function App() {
  return (
    <div>
       {/* <Navbar  /> */}
      <ReviewList/>
    

    <Navbar icon={<FaSearch size="28"/>} />

    </div>
  );
}

export default App;
