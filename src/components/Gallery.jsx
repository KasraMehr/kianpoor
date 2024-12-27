import { useState } from 'react';
import '../index.css';
import A from '../assets/images/gallery/A.jpg';
import B from '../assets/images/gallery/B.jpg';
import C from '../assets/images/gallery/C.jpg';
import A1 from '../assets/images/gallery/A1.jpg';
import B1 from '../assets/images/gallery/B1.jpg';
import C1 from '../assets/images/gallery/C1.jpg';
import A2 from '../assets/images/gallery/A2.jpg';
import B2 from '../assets/images/gallery/B2.jpg';
import C2 from '../assets/images/gallery/C2.jpg';
import A3 from '../assets/images/gallery/A3.jpg';
import B3 from '../assets/images/gallery/B3.jpg';
import C3 from '../assets/images/gallery/C3.jpg';
import A4 from '../assets/images/gallery/A4.jpg';
import B4 from '../assets/images/gallery/B4.jpg';
import C4 from '../assets/images/gallery/C4.jpg';
import A5 from '../assets/images/gallery/A5.jpg';
import B5 from '../assets/images/gallery/B5.jpg';
import C5 from '../assets/images/gallery/C5.jpg';

function Gallery() {
  return (
      <>
        <div id="gallery" className="px-4 sm:px-10 lg:px-20 pt-16" dir="rtl">
          <div className="text-2xl md:text-3xl font-medium text-center">
            گالری
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
            <img src={A} alt="img1" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={B} alt="img2" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={C} alt="img3" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={A1} alt="img1" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={B1} alt="img2" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={C1} alt="img3" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={A2} alt="img1" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={B2} alt="img2" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={C2} alt="img3" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={A3} alt="img1" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={B3} alt="img2" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={C3} alt="img3" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={A4} alt="img1" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={B4} alt="img2" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={C4} alt="img3" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={A5} alt="img1" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={B5} alt="img2" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={C5} alt="img3" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
          </div>
        </div>
      </>
  );
}

export default Gallery;
