import { useState } from 'react';
import MasterCard1 from './cards/masters/MasterCard1.jsx';
import MasterCard2 from './cards/masters/MasterCard2.jsx';
import MasterCard3 from './cards/masters/MasterCard3.jsx';
import MasterCard4 from './cards/masters/MasterCard4.jsx';
import MasterCard5 from './cards/masters/MasterCard5.jsx';
import MasterCard6 from './cards/masters/MasterCard6.jsx';
import MasterCard7 from './cards/masters/MasterCard7.jsx';
import MasterCard8 from './cards/masters/MasterCard8.jsx';
import MasterCard9 from './cards/masters/MasterCard9.jsx';

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
            <MasterCard8 />
            <MasterCard3 />
            <MasterCard4 />
            <MasterCard5 />
            <MasterCard6 />
            <MasterCard7 />
            <MasterCard9 />
          </div>
        </div>
      </>
  );
}

export default Masters;
