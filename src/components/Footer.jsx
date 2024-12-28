import { useState } from 'react';
import '../index.css';
import Telegram from '../assets/images/website/telegram.svg';
import Instagram from '../assets/images/website/instagram.svg';

function Footer() {
    return (
        <>
            <div className="bg-primary w-full mt-20 pt-16 text-white" dir="rtl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* بخش اطلاعات */}
                        <div className="text-center lg:text-right">
                            <div className="text-3xl md:text-4xl font-medium">
                                مجموعه ورزشی شهید کیانپور
                            </div>
                            <div className="text-base md:text-lg lg:text-xl mt-6 leading-7 md:leading-8 text-justify">
                                تمامی رشته‌ها در بانوان و آقایان امکان آموزش و ثبت‌نام را دارند.
                                تمامی رشته‌ها توسط مربیان برتر و نام آشنا استانی برگزار می‌شوند.
                                در تمامی رشته‌ها از همکاران روانشناس ورزشی و متخصص تغذیه استفاده می‌شود.
                                ساعت کلاس‌های آموزشی برای بانوان از 7:30 صبح الی 19:30 و برای آقایان از ساعت 19:30 الی 00:00 دایر است.
                            </div>
                        </div>

                        {/* بخش لینک‌ها و آیکون‌ها */}
                        <div className="text-center">
                            <div className="grid grid-cols-1 gap-4">
                                <a href="#hero" className="text-lg md:text-xl font-medium hover:text-gray-300">
                                    صفحه اصلی
                                </a>
                                <a href="#about-us" className="text-lg md:text-xl font-medium hover:text-gray-300">
                                    درباره ما
                                </a>
                                <a href="#contact-us" className="text-lg md:text-xl font-medium hover:text-gray-300">
                                    تماس با ما
                                </a>
                                <a href="#masters" className="text-lg md:text-xl font-medium hover:text-gray-300">
                                  اساتید
                                </a>
                                <a href="#sports" className="text-lg md:text-xl font-medium hover:text-gray-300">
                                    ورزش‌ها
                                </a>
                                <a href="#gallery" className="text-lg md:text-xl font-medium hover:text-gray-300">
                                    گالری
                                </a>
                            </div>
                            <div className="flex justify-center mt-8 space-x-8 rtl:space-x-reverse">
                                <a href="https://t.me/kianepor" target="_blank"><img src={Telegram} alt="telegram" className="w-8 h-8 md:w-10 md:h-10" /></a>
                                <a href="https://t.me/kianepor" target="_blank"><img src={Instagram} alt="instagram" className="w-8 h-8 md:w-10 md:h-10" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
