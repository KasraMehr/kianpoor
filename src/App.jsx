import React from 'react'
import './App.css'
import Pros from './components/Pros.jsx';
import Gallery from './components/Gallery.jsx';
import MasterCard1 from './components/cards/MasterCard1.jsx'
import ContactUs from './components/ContactUs.jsx'
import AboutUs from "./components/AboutUs.jsx";
import Masters from "./components/Masters.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Pros />
      <AboutUs />
      <ContactUs />
      <Masters />
      <Gallery />
      <Footer />


    </div>
  )
}

export default App
