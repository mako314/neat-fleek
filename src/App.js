import React, {useState, useEffect} from 'react';
import Navbar from './Header/Navbar';
import Home from './Home';
import ReviewList from './ReviewComponents/ReviewList';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GuideList from './GuideComponents/GuideList';


function App() {

const [searchTerm, setSearchTerm] = useState("")

const [gameReviews, setGameReviews] = useState([])
const [gameGuides, setGameGuides] = useState([])


  useEffect(() =>{
    fetch("http://localhost:3000/reviews")
    .then(resp => resp.json())
    .then(data => setGameReviews(data))
  },[])

  useEffect(() =>{
    fetch("http://localhost:4000/guides")
    .then(resp => resp.json())
    .then(data => setGameGuides(data))
  },[])

  // console.log(gameGuides)


const filteredReviews = gameReviews.filter((data) =>(
    data.gameTitle.toLowerCase().includes(searchTerm.toLowerCase())
))

  return (
    <div>
      <nav className="navbar">
       <Navbar setSearchTerm={setSearchTerm} />
       </nav>


       <div>
       
       <Routes>
        <Route path = '/' element= {<Home gameReviews={filteredReviews} />} />
        <Route path = 'review-list' element= {<ReviewList gameReviews={filteredReviews}/>}/>
      </Routes>
      

       <div className="homebase">
       <Home/>
      <ReviewList gameReviews={filteredReviews}  />
      <GuideList gameGuides = {gameGuides}/>

      </div>
    </div>
  );
}

export default App;
