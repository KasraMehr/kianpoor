import React from 'react'
import './index.css';
import Pros from './components/Pros.jsx';
import Gallery from './components/Gallery.jsx';
import ContactUs from './components/ContactUs.jsx'
import AboutUs from "./components/AboutUs.jsx";
import Masters from "./components/Masters.jsx";
import Footer from "./components/Footer.jsx";
import Sports from "./components/Sports.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Pros />
        <AboutUs />
        <ContactUs />
        <Masters />
        <Sports />
        <Gallery />
        <Footer />


    </div>
  )
}

export default App
