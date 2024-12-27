import '../index.css';
import hero from '../assets/images/hero.png';

function Hero() {
    return (
        <>
            <div id="hero" className="bg-primary w-full flex flex-col lg:flex-row items-center lg:items-start p-10 lg:p-20 text-white"
                dir="rtl"
            >
                {/* متن */}
                <div className="w-full lg:w-1/2 px-4 lg:px-8">
                    <div className="text-4xl sm:text-5xl font-medium py-5 sm:py-10">
                        باشگاه فرهنگی ورزشی
                        شهید کیانپور
                    </div>
                    <div className="text-lg sm:text-xl font-regular text-justify py-5 sm:py-10">
                        مجموعه ورزشی شهید کیانپور با ورزش های متنوع برای
                        <br />
                        بانوان و آقایان، مقرون به صرفه برای تمامی رده های سنی
                    </div>
                    <div className="flex justify-between lg:justify-start lg:gap-16 pt-5 sm:pt-10">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-semibold">70</div>
                            <div className="text-lg sm:text-xl font-medium">کلاس آموزشی</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-semibold">+10k</div>
                            <div className="text-lg sm:text-xl font-medium">ورزشکاران فعال</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-semibold">20</div>
                            <div className="text-lg sm:text-xl font-medium">سال سابقه</div>
                        </div>
                    </div>
                </div>

                {/* تصویر */}
                <div className="w-full lg:w-1/2 flex justify-center pt-10 lg:pt-0">
                    <img
                        src={hero}
                        alt="hero"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </>
    );
}

export default Hero;
