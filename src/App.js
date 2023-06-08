import React, {useState, useEffect} from 'react';
import Navbar from './Header/Navbar';
import Home from './Home';
import ReviewList from './ReviewComponents/ReviewList';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GuideList from './GuideComponents/GuideList';
import DiscussionList from './DiscussionComponents/DiscussionList'
import FormOne from './ReviewComponents/FormOne';
import DisplayPage from './DisplayPage';


function App() {

const [searchTerm, setSearchTerm] = useState("")

const [gameReviews, setGameReviews] = useState([])
const [gameGuides, setGameGuides] = useState([])
const [gameDiscussions, setGameDiscussions] = useState([])

//populate this and send it to DisplayPage
//pass it to home since all of our stuff is in home 
//Write ? ?  ?
const [displayContent, setDisplayContent] = useState([])

console.log(displayContent) //testing to see if I'm properly grabbing the content I want

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


const filteredReviews = gameReviews.filter((data) =>(
    data.gameTitle.toLowerCase().includes(searchTerm.toLowerCase())
))

  return (
    <div>
      <nav className="navbar">
       <Navbar setSearchTerm={setSearchTerm} />
       </nav>
       
       <div>
       {/* <FormOne 
       gameReviews={gameReviews}
       setGameReviews={setGameReviews}
       gameGuides={gameGuides}
       setGameGuides={setGameGuides}
       gameDiscussions={gameDiscussions}
       setGameDiscussions={setGameDiscussions}
       /> */}
       
       <Routes>
        <Route path = '/' element= {<Home filteredReviews={filteredReviews} gameGuides = {gameGuides} gameDiscussions ={gameDiscussions} setDisplayContent={setDisplayContent} />} />
        <Route exact path = '/review-list' element= {<ReviewList gameReviews={filteredReviews}/>}/>
        <Route exact path= '/guide-list' element={<GuideList gameGuides = {gameGuides}/>}/>
        <Route exact path= '/discussionslist' element={<DiscussionList gameDiscussions ={gameDiscussions} />}/>
        <Route exact path= '/form' element={<FormOne gameReviews={gameReviews} setGameReviews={setGameReviews} gameGuides={gameGuides} setGameGuides={setGameGuides} gameDiscussions={gameDiscussions} setGameDiscussions={setGameDiscussions}/>} />
        <Route exact path = '/display-page' element= {<DisplayPage/>}/>
      </Routes>
      
     

    </div>
    </div>
  );
}

export default App;
