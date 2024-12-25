import React from 'react'
import './App.css'
import Pros from './components/Pros.jsx';
import Gallery from './components/Gallery.jsx';
import MasterCard from './components/cards/MasterCard.jsx'
import ContactUs from './components/ContactUs.jsx'

function App() {
  return (
    <div>
      <Pros />
      <Gallery />
      <ContactUs />
    </div>
  )
}

export default App
