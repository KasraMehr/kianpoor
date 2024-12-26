import '../../index.css';
import Karate from '../../assets/images/karate.svg';

function ProCode1() {
  return (
      <>
        <div className="w-full sm:w-80 h-auto sm:h-80 rounded-xl overflow-hidden border-4 border-primary p-4" dir="rtl">
          <img src={Karate} alt="karate" className="py-2"/>
          <div className="font-medium text-lg sm:text-xl mb-2">تنوع فعالیت‌ها</div>
          <p className="text-gray-700 text-sm sm:text-base text-justify py-2">
            باشگاه‌های ورزشی چند منظوره امکانات و فعالیت‌های متنوعی را ارائه می‌دهند، از جمله ورزش‌های گروهی، تمرینات فردی، کلاس‌های یوگا و پیلاتس. این تنوع به اعضا این امکان را می‌دهد که با توجه به سلیقه و نیازهای خود، فعالیت مناسب را انتخاب کنند و از ورزش کردن لذت ببرند.
          </p>
        </div>
      </>
  );
}

export default ProCode1;
