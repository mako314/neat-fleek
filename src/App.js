import React, {useState, useEffect} from 'react';
import ReviewCards from './Components/ReviewCards';
import ReviewList from './Components/ReviewList';
import FormOne from './Components/FormOne';
import Navbar from './Header/Navbar';
import Home from './Home';

function App() {

const [searchTerm, setSearchTerm] = useState("")
const [gameReviews, setGameReviews] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/reviews")
    .then(resp => resp.json())
    .then(data => setGameReviews(data))
  },[])


const filteredReviews = gameReviews.filter((data) =>(
    data.gameTitle.toLowerCase().includes(searchTerm.toLowerCase())
))

  return (
    <div>
      <nav className="navbar">
       <Navbar setSearchTerm={setSearchTerm} />
       </nav>
       <div className="homebase">
       <Home/>
      <ReviewList gameReviews={filteredReviews}  />
      </div>
    </div>
  );
}

export default App;
