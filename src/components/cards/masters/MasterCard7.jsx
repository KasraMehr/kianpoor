import '../../../index.css';
import Lotfi from '../../../assets/images/masters/Lotfi.jpg';

function MasterCard7() {
  return (
      <>
        <div className="flex flex-col items-center sm:items-start sm:pl-10">
          {/* تصویر */}
          <img
              src={Lotfi}
              alt="Lotfi"
              className="w-48 h-48 sm:w-96 sm:h-96 shadow-lg"
          />
          {/* نام */}
          <div className="bg-secondary w-48 sm:w-96 text-center text-lg sm:text-xl font-medium py-2">
            اختر لطفی
          </div>
          {/* رشته ورزشی */}
          <div className="bg-secondary w-48 sm:w-96 text-center text-sm sm:text-base font-medium py-2">
            پیلاتس
          </div>
        </div>
      </>
  );
}

export default MasterCard7;
