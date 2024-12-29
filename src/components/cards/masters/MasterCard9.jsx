import '../../../index.css';
import Fatahi from '../../../assets/images/masters/Fatahi.jpg';

function MasterCard9() {
  return (
      <>
        <div className="flex flex-col items-center sm:items-start sm:pl-10">
          {/* تصویر */}
          <img
              src={Fatahi}
              alt="Fatahi"
              className="w-48 h-48 sm:w-96 sm:h-96 shadow-lg rounded-t-lg"
          />
          {/* نام */}
          <div className="bg-secondary w-48 sm:w-96 text-center text-lg sm:text-xl font-medium py-2">
            خانم فتاحی
          </div>
          {/* رشته ورزشی */}
          <div className="bg-secondary w-48 sm:w-96 text-center text-sm sm:text-base font-medium py-2 rounded-b-lg">
            بسکتبال
          </div>
        </div>
      </>
  );
}

export default MasterCard9;
