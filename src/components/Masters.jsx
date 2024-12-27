import { useState } from 'react';
import MasterCard1 from './cards/MasterCard1.jsx';
import MasterCard2 from './cards/MasterCard2.jsx';
import MasterCard3 from './cards/MasterCard3.jsx';
import '../index.css';

function Masters() {
  return (
      <>
        <div id="masters" className="px-4 sm:px-10 lg:px-20 pt-24" dir="rtl">
          {/* عنوان */}
          <div className="text-2xl sm:text-3xl font-medium text-center">
            اساتید باشگاه کیانپور
          </div>

          {/* کارت‌ها */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 place-items-center">
            <MasterCard1 />
            <MasterCard2 />
            <MasterCard3 />
            <MasterCard1 />
            <MasterCard2 />
            <MasterCard3 />
            <MasterCard1 />
            <MasterCard2 />
            <MasterCard3 />
          </div>
        </div>
      </>
  );
}

export default Masters;
