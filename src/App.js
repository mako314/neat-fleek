import React from 'react';
import {FaSearch} from "react-icons/fa";
import ReviewCards from './Components/ReviewCards';
import ReviewList from './Components/ReviewList';
import FormOne from './Components/FormOne';
import Navbar from './Header/Navbar';

function App() {
  return (
    <div>
       <Navbar  />
      <ReviewList/>
    </div>

  );
}

export default App;
