import React, {useState, useEffect} from 'react';
import ReviewList from './ReviewComponents/ReviewList';
import FormOne from './ReviewComponents/FormOne';
import Navbar from './Header/Navbar';
import Home from './Home';
import GuideList from './GuideComponents/GuideList';
import DiscussionList from './DiscussionComponents/DiscussionList'

function App() {

const [searchTerm, setSearchTerm] = useState("")

const [gameReviews, setGameReviews] = useState([])
const [gameGuides, setGameGuides] = useState([])
const [gameDiscussions, setGameDiscussions] = useState([])


  //grab reviews
  useEffect(() =>{
    fetch("http://localhost:3000/reviews")
    .then(resp => resp.json())
    .then(data => setGameReviews(data))
  },[])

  //grab guides
  useEffect(() =>{
    fetch("http://localhost:4000/guides")
    .then(resp => resp.json())
    .then(data => setGameGuides(data))
  },[])

  //grab discussions
  useEffect(() =>{
    fetch("http://localhost:5000/disccusions")
    .then(resp => resp.json())
    .then(data => setGameDiscussions(data))
  },[])

// console.log(gameDiscussions)

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
      <GuideList gameGuides = {gameGuides}/>
      <DiscussionList gameDiscussions ={gameDiscussions}/>
      </div>
    </div>
  );
}

export default App;
