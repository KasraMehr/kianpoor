import { useState } from 'react'
import '../index.css'
import A from '../assets/A.jpg'
import B from '../assets/B.jpg'
import C from '../assets/C.jpg'
import D from '../assets/D.jpg'
import E from '../assets/E.jpg'
import F from '../assets/F.jpg'
import G from '../assets/G.jpg'
import H from '../assets/H.jpg'
import I from '../assets/I.jpg'


function Gallery() {
  return (
    <>
      <div className="px-20 pt-24" dir='rtl'>
        <div className="text-3xl font-semibold justify-end">
          گالری
        </div>
        <div className="flex pt-12 justify-center pt-10">
          <img src={A} alt="img1" className= "w-96 h-80 rounded pl-10" />
          <img src={B} alt="img1" className= "w-96 h-80 rounded pl-10" />
          <img src={C} alt="img1" className= "w-96 h-80 rounded pl-10" />
        </div>
        <div className="flex pt-12 justify-center pt-10">
          <img src={D} alt="img1" className= "w-96 h-80 rounded pl-10" />
          <img src={E} alt="img1" className= "w-96 h-80 rounded pl-10" />
          <img src={F} alt="img1" className= "w-96 h-80 rounded pl-10" />
        </div>
        <div className="flex pt-12 justify-center pt-10">
          <img src={G} alt="img1" className= "w-96 h-80 rounded pl-10" />
          <img src={H} alt="img1" className= "w-96 h-80 rounded pl-10" />
          <img src={I} alt="img1" className= "w-96 h-80 rounded pl-10" />
        </div>
      </div>
    </>
  )
}
export default Gallery
