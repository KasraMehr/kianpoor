import '../../../index.css';
import Kamarkord from '../../../assets/images/masters/Kamarkord.jpg';

function MasterCard5() {
  return (
      <>
        <div className="flex flex-col items-center sm:items-start sm:pl-10">
          {/* تصویر */}
          <img
              src={Kamarkord}
              alt="Kamarkord"
              className="w-48 h-48 sm:w-96 sm:h-96 shadow-lg rounded-t-lg"
          />
          {/* نام */}
          <div className="bg-secondary w-48 sm:w-96 text-center text-lg sm:text-xl font-medium py-2">
            غزال کمرکرد
          </div>
          {/* رشته ورزشی */}
          <div className="bg-secondary w-48 sm:w-96 text-center text-sm sm:text-base font-medium py-2 rounded-b-lg">
            توتال هاپکیدو GHF
          </div>
        </div>
      </>
  );
}

export default MasterCard5;
