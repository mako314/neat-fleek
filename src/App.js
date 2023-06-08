import React, {useState, useEffect} from 'react';
import Navbar from './Header/Navbar';
import Home from './Home';
import ReviewList from './ReviewComponents/ReviewList';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GuideList from './GuideComponents/GuideList';
import DiscussionList from './DiscussionComponents/DiscussionList'
import FormOne from './ReviewComponents/FormOne';


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
    fetch("http://localhost:5000/discussions")
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
       
       <div>
       <FormOne 
       gameReviews={gameReviews}
       setGameReviews={setGameReviews}
       gameGuides={gameGuides}
       setGameGuides={setGameGuides}
       gameDiscussions={gameDiscussions}
       setGameDiscussions={setGameDiscussions}
       />
       
       <Routes>
        <Route path = '/' element= {<Home filteredReviews={filteredReviews} gameGuides = {gameGuides} gameDiscussions ={gameDiscussions} />} />
        <Route exact path = '/review-list' element= {<ReviewList gameReviews={filteredReviews}/>}/>
        <Route exact path= '/guide-list' element={<GuideList gameGuides = {gameGuides}/>}/>
        <Route exact path= '/discussionslist' element={<DiscussionList gameDiscussions ={gameDiscussions} />}/>
        <Route exact path= '/form' element={<FormOne gameDiscussions ={gameDiscussions} />}/>
      </Routes>
      
     

    </div>
    </div>
  );
}

export default App;
