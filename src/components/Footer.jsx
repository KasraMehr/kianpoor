import { useState } from 'react'
import '../index.css'
import Telegram from "../assets/images/telegram.svg";
import Instagram from "../assets/images/instagram.svg";
function Footer() {
  return (
    <>
      <div className="bg-primary w-full mt-20 pt-16 text-white" dir='rtl'>
        <div className="flex">
          <div className="w-5/12 pr-44">
            <div className="text-4xl font-bold">
                مجموعه ورزشی شهید کیانپور
            </div>
            <div className="text-xl font-regular text-justify mt-6 leading-8">
                  تمامی رشته ها در بانوان و آقایان امکان آموزش و ثبت نام را دارند.
                  تمامی رشته ها توسط مربیان برتر و نام آشنا  استانی برگزار می شوند در تمامی رشته ها از همکاران روانشناس ورزشی و متخصص تغذیه استفاده می شود.
                  ساعت کلاس های آموزشی برای بانوان از 7:30 صبح الی 19:30 و برای آقایان از ساعت 19:30 الی 00:00 دایر است.
            </div>
          </div>
          <div className="w-7/12 pr-44 text-center">
              <div className="text-2xl font-medium pb-8">
                  صفحه اصلی
              </div>
              <div className="text-2xl font-medium pb-8">
                  درباره ما
              </div>
              <div className="text-2xl font-medium pb-8">
                  تماس با ما
              </div>
              <div className="text-2xl font-medium pb-8">
                  ورزش ها
              </div>
              <div className="text-2xl font-medium pb-8">
                  گالری
              </div>
              <div className="flex justify-center">
                  <img src={Telegram} alt="telegram" className="ml-20"/>
                  <img src={Instagram} alt="instagram" />
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer
