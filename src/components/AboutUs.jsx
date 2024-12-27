import '../index.css';
import aboutKianpoor from '../assets/images/website/aboutKianpoor.png';

function AboutUs() {
  return (
      <>
        <div id="about-us" className="flex flex-col lg:flex-row justify-center items-center mt-12 lg:mt-24 px-4 lg:px-12" dir="rtl">
          {/* متن */}
          <div className="lg:w-5/12 w-full lg:ml-12 mb-8 lg:mb-0">
            <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-center lg:text-right">
              درباره مجموعه ورزشی کیانپور
            </div>
            <br />
            <div className="text-sm sm:text-base font-medium text-justify leading-relaxed">
              مجموعه ورزشی کیانپور در تلاش است تا با رویکردی جامع و هدفمند، ورزش را برای تمامی سطوح اجتماعی در دسترس قرار داده و امکان مشارکت همگانی را فراهم کند. این مجموعه با تأکید بر ارزان‌سازی هزینه‌ها و در عین حال حفظ کیفیت بالای آموزش، نقش مؤثری در توسعه ورزش‌های مختلف ایفا می‌کند. کیانپور با استفاده از مربیان برجسته، متخصص، و متعهد به آموزش اصولی، به دنبال تیم‌سازی و ارتقای سطح ورزشکاران است. همچنین، این مجموعه به شرکت فعال در مسابقات استانی و کشوری اهمیت بسیاری می‌دهد تا بتواند استعدادهای ورزشی را در مسیر پیشرفت هدایت کند.
              <br /><br />
              یکی از محورهای اصلی فعالیت‌های مجموعه ورزشی کیانپور، استعدادیابی و ارائه آموزش‌های حرفه‌ای است. این امر با هدف جذب ورزشکاران در باشگاه‌ها و آکادمی‌های زیرمجموعه سالن ورزشی چندمنظوره کیانپور انجام می‌شود. این سالن، که در اکثر رشته‌های ورزشی فعال است، به‌عنوان مرکزی برای آموزش، تمرین و فعالیت‌های رقابتی شناخته می‌شود. باشگاه‌ها و آکادمی‌های کیانپور در لیگ‌های شهرستان و استان البرز حضوری فعال دارند و به‌دنبال پرورش ورزشکارانی هستند که بتوانند در سطحی بالاتر از نظر فنی و رقابتی به موفقیت دست یابند.
            </div>
          </div>
          {/* تصویر */}
          <img
              src={aboutKianpoor}
              alt="kianpoor"
              className="w-full lg:w-5/12 rounded-lg shadow-lg"
          />
        </div>
      </>
  );
}

export default AboutUs;
