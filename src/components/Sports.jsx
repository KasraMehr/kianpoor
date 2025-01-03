import '../index.css';
import SportCard1 from './cards/sports/SportCard1.jsx';
import SportCard2 from './cards/sports/SportCard2.jsx';
import SportCard3 from './cards/sports/SportCard3.jsx';
import SportCard4 from './cards/sports/SportCard4.jsx';
import SportCard5 from './cards/sports/SportCard5.jsx';
import SportCard6 from './cards/sports/SportCard6.jsx';
import SportCard7 from './cards/sports/SportCard7.jsx';

function Sports() {
  return (
      <>
        <div id="sports" className="px-4 sm:px-10 lg:px-20 pt-24" dir="rtl">
          {/* عنوان */}
          <div className="text-2xl sm:text-3xl font-medium text-center">
            ورزش های باشگاه کیانپور
          </div>

          {/* کارت‌ها */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12">
            <SportCard1 />
            <SportCard2 />
            <SportCard3 />
            <SportCard4 />
            <SportCard5 />
            <SportCard6 />
            <SportCard7 />
          </div>
        </div>
      </>
  );
}

export default Sports;
