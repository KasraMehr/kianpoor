import { useState } from 'react';
import '../index.css';
import A from '../assets/images/A.jpg';
import B from '../assets/images/B.jpg';
import C from '../assets/images/C.jpg';
import D from '../assets/images/D.jpg';
import E from '../assets/images/E.jpg';
import F from '../assets/images/F.jpg';
import G from '../assets/images/G.jpg';
import H from '../assets/images/H.jpg';
import I from '../assets/images/I.jpg';

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
            <img src={D} alt="img4" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={E} alt="img5" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={F} alt="img6" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={G} alt="img7" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={H} alt="img8" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
            <img src={I} alt="img9" className="w-full h-60 sm:h-72 lg:h-80 rounded object-cover" />
          </div>
        </div>
      </>
  );
}

export default Gallery;
