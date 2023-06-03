import React from 'react';
import Navbar from './Navbar';
import {FaSearch} from "react-icons/fa";

function App() {
  return (
    <Navbar icon={<FaSearch size="28"/>} />
  );
}

export default App;
