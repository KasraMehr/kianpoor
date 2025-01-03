import '../../../index.css';
import Godarzi from '../../../assets/images/masters/Godarzi.jpg';

function MasterCard10() {
  return (
      <>
        <div className="flex flex-col items-center sm:items-start sm:pl-10">
          {/* تصویر */}
          <img
              src={Godarzi}
              alt="Godarzi"
              className="w-full h-60 sm:h-72 lg:h-80 shadow-lg rounded-t-lg"
          />
          {/* نام */}
          <div className="bg-secondary w-full text-center text-lg sm:text-xl font-medium py-2">
             خانم گودرزی
          </div>
          {/* رشته ورزشی */}
          <div className="bg-secondary w-full text-center text-sm sm:text-base font-medium py-2 rounded-b-lg">
            نینجوتسو
          </div>
        </div>
      </>
  );
}

export default MasterCard10;
