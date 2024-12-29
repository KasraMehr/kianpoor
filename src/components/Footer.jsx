import { useState } from 'react';
import '../index.css';
import Telegram from '../assets/images/website/telegram.svg';
import Instagram from '../assets/images/website/instagram.svg';

function Footer() {
    return (
        <>
            <div className="bg-primary w-full mt-20 pt-16 text-white" dir="rtl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* بخش اطلاعات */}
                        <div className="w-auto">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6472.160768761315!2d51.000097543001175!3d35.79795986477812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8d955f73032ec1%3A0x2f14923e6ae0e04a!2z2YjYsdiy2LTar9in2Ycg2qnbjNin2YbZvtmI2LE!5e0!3m2!1sfa!2s!4v1735473467678!5m2!1sfa!2s" className="w-full h-[300px] lg:w-[400px] border-0 rounded-lg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="text-center lg:text-right">
                            <div className="text-2xl md:text-3xl font-medium">
                                مجموعه ورزشی شهید کیانپور
                            </div>
                            <div className="text-base md:text-base lg:text-lg mt-6 leading-7 md:leading-8 text-justify">
                                تمامی رشته‌ها در بانوان و آقایان امکان آموزش و ثبت‌نام را دارند.
                                تمامی رشته‌ها توسط مربیان برتر و نام آشنا استانی برگزار می‌شوند.
                                در تمامی رشته‌ها از همکاران روانشناس ورزشی و متخصص تغذیه استفاده می‌شود.
                                ساعت کلاس‌های آموزشی برای بانوان از 7:30 صبح الی 19:30 و برای آقایان از ساعت 19:30 الی 00:00 دایر است.
                            </div>
                            <div className="text-sm sm:text-base font-medium pt-4">
                              آدرس: کرج - بلوار هفت تیر - نرسیده به میدان امام حسین
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
