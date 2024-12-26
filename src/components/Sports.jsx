import '../index.css';
import SportCard1 from './cards/SportCard1.jsx';
import SportCard2 from './cards/SportCard2.jsx';

function Sports() {
  return (
      <>
        <div className="px-4 sm:px-10 lg:px-20 pt-24" dir="rtl">
          {/* عنوان */}
          <div className="text-2xl sm:text-3xl font-medium text-center">
            ورزش های باشگاه کیانپور
          </div>

          {/* کارت‌ها */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12">
            <SportCard1 />
            <SportCard2 />
            <SportCard1 />
            <SportCard2 />
            <SportCard1 />
            <SportCard2 />
          </div>
        </div>
      </>
  );
}

export default Sports;
