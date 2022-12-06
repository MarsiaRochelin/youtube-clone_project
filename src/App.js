import {BrowserRouter as Router, Routes, Route} from 'react'

import Home from "./components /Home"
import Nav from './components /Nav';
import About from './components /About';
import Video from "./components /Video"

import './App.css';

//import BrowserRouter as {Router, Routes, Route} from 'react-router-dom'
  //create each components and import them here
  //to pass down router functionality wrap components inside of a router element inside the div element for the app
  //define area that will display views by wrapping the components in the Routes element and by giving them individual Route(s) with the path and element attributes with-in the Routes 
  //for each view import {Link} from "react router-dom"
    //wrap each element in Link elements with to attributes in them to navigate user to a different views 

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/video/:id" element={<Video />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
