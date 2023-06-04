import React from 'react';
import Navbar from './Navbar';
import {FaSearch} from "react-icons/fa";
import ReviewCards from './Components/ReviewCards';
import FormOne from './Components/FormOne';

function App() {
  return (
    <div>
      <Navbar  />
      <ReviewList/>
    </div>

  );
}

export default App;
