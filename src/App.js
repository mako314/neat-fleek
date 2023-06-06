import React, {useState, useEffect} from 'react';
import ReviewCards from './Components/ReviewCards';
import ReviewList from './Components/ReviewList';
import FormOne from './Components/FormOne';
import Navbar from './Header/Navbar';

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
       <Navbar setSearchTerm={setSearchTerm} />
      <ReviewList gameReviews={filteredReviews}  />
    </div>
  );
}

export default App;
