import '../../index.css';
import D from '../../assets/images/D.jpg';

function MasterCard2() {
  return (
      <>
        <div className="flex flex-col items-center sm:items-start sm:pl-10">
          {/* تصویر */}
          <img
              src={D}
              alt="MasterCard1"
              className="w-48 h-48 sm:w-96 sm:h-96 shadow-lg"
          />
          {/* نام */}
          <div className="bg-secondary w-48 sm:w-96 text-center text-lg sm:text-xl font-semibold py-2">
            نعمت الله مهرعلی زاده
          </div>
          {/* رشته ورزشی */}
          <div className="bg-secondary w-48 sm:w-96 text-center text-sm sm:text-base font-medium py-2">
            تکواندو
          </div>
        </div>
      </>
  );
}

export default MasterCard2;
