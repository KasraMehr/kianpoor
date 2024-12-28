import '../index.css';
import Telegram from '../assets/images/website/telegram.svg';
import Instagram from '../assets/images/website/instagram.svg';

function ContactUs() {
  return (
      <>
        <div id="contact-us" className="bg-primary flex flex-col w-full text-white mt-24 place-items-center pb-20" dir="rtl">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-medium pt-20 text-center">
            همین حالا ثبت نام کنید
          </div>
          <div className="text-sm sm:text-base font-medium pt-4 text-center">
            به جمع ما بپیوندید و از امکانات بی‌نظیر ورزشی بهره‌مند شوید.
          </div>
          <div className="w-11/12 sm:w-9/12 lg:w-8/12 border flex flex-col border-white border-2 mt-20 items-center rounded-2xl pb-6">
            <div className="pt-8 font-medium text-xl sm:text-2xl lg:text-3xl text-center">
              شماره تماس مجموعه برای ثبت نام
            </div>
            <div className="text-sm sm:text-base justify-center font-medium pt-4">
              راه‌های ارتباطی
            </div>
            <div className="pt-12 flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 lg:space-x-12">
              <div className="font-medium text-lg sm:text-xl lg:text-2xl sm:ml-4">
                آقای عالمی
              </div>
              <div className="bg-active rounded-lg text-sm sm:text-base lg:text-xl px-6 sm:px-12 py-2">
                09123635319
              </div>
            </div>
            <div className="pt-12 flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 lg:space-x-12">
              <div className="font-medium text-lg sm:text-xl lg:text-2xl sm:ml-4">
                آقای واحدی
              </div>
              <div className="bg-active rounded-lg text-sm sm:text-base lg:text-xl px-6 sm:px-12 py-2">
                09369551930
              </div>
            </div>
            <div className="pt-12 flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 lg:space-x-12">
              <div className="font-medium text-lg sm:text-xl lg:text-2xl sm:ml-4">
                شماره ثابت
              </div>
              <div className="bg-active rounded-lg text-sm sm:text-base lg:text-xl px-6 sm:px-12 py-2">
                02632828066
              </div>
            </div>
            <div className="pt-12 flex justify-center sm:space-x-8 lg:space-x-12">
              <a href="https://t.me/kianepor" target="_blank"><img src={Telegram} alt="telegram" className="w-10 sm:w-12 lg:w-16 ml-6" /></a>
              <a href="https://t.me/kianepor" target="_blank"><img src={Instagram} alt="instagram" className="w-10 sm:w-12 lg:w-16 mr-6" /></a>
            </div>
          </div>
        </div>
      </>
  );
}

export default ContactUs;
